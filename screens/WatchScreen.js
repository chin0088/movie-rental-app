import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect, useState, useRef } from 'react';
import { Button, Input } from '@rneui/themed';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRented } from '../context/Rented';

const videoSrc = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function WatchScreen({ navigation, route}){
    const orientation = useDeviceOrientation();
    const [orient, setOrient] = useState('portrait');
    const { removeRentedMovie } = useRented();
    const { movieId, movieTitle } = route.params;
  

    const player = useVideoPlayer(videoSrc, (player) => {
        // console.log(player.width, player.volume);
        player.loop = false;
        // player.play(); //autoplay
      });
      const vidview = useRef(null);

    useEffect(() => {
    setOrient(orientation);
    //update a state variable to rerender the component

    if (orientation === 'landscape') {
      //let's full screen the video
      vidview.current.enterFullscreen();
    } else {
      // if(vidview.current.isFullscreen)
      // vidview.current.exitFullscreen();
    }
  }, [orientation]);

  async function markWatched() {
    try {
        await removeRentedMovie(movieId);
        navigation.goBack();
    } catch (error) {
        console.log('Failed to mark video as watched', error);   
    }
  }

    return(
        <View style={styles.container}>
            <Text>Now Playing</Text>
            <Text>{movieTitle}</Text>
  
        <VideoView ref={vidview} allowsFullscreen player={player} style={styles.video} />

        {!player.isPlaying && 
        (            
            <>
                <Button
                    title="Mark as Watch"
                    onPress={markWatched}
                    icon={{
                        name: 'check',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconLeft
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: '#944654',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                />
            </>
            )
        }

  
        <StatusBar style="auto" />
      </View>  
    )
}

const styles = StyleSheet.create({
    video: {
      width: 350,
      height: 275,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
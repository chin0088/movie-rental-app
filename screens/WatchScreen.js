import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect, useRef } from 'react';
import { Button } from '@rneui/themed';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRented } from '../context/Rented';
import { theme, styled } from '../theme/theme';

const videoSrc = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function WatchScreen({ navigation, route}){
    const orientation = useDeviceOrientation();
    const { removeRentedMovie } = useRented();
    const { movieId, movieTitle } = route.params;
  

    const player = useVideoPlayer(videoSrc, (player) => {
        // console.log(player.width, player.volume);
        player.loop = false;
        // player.play(); //autoplay
      });
      const vidview = useRef(null);


    useEffect(() => {

    console.log('Current orientation: ', orientation);
    
    if (orientation === 'landscape') {
      console.log('enter to landscape');
      
      //let's full screen the video
      vidview.current.enterFullscreen();
    } else {
      // Tried different ways but still not able to exit fullscreen when returning to portrait >_<
      // console.log('enter to portrait');
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
        <View style={styled.container}>
            <Text style={styled.contentText}>Now Playing</Text>
            <Text style={styled.headerText}>{movieTitle}</Text>
  
        <VideoView ref={vidview} allowsFullscreen player={player} style={styled.video} />

        {!player.isPlaying && 
        (            
            <View style={styled.btnContainer}>
                <Button
                    title="Mark as Watch"
                    onPress={markWatched}
                    icon={{...styled.markWatchedIcon, ...styled.btnIcon}}
                    iconLeft
                    iconContainerStyle={styled.btnIconContainer}
                    titleStyle={styled.btnTitle}
                    buttonStyle={styled.btn}
                />
            </View>
            )
        }

  
        <StatusBar style="auto" />
      </View>  
    )
}

// const styles = StyleSheet.create({
//     video: {
//       width: 350,
//       height: 275,
//     },
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
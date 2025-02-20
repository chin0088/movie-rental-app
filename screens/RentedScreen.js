import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRented } from '../context/Rented';
import Card from '../components/Card';
import theme from '../theme/theme';


export default function RentedScreen({ navigation }) {
    const { data } = useRented();
    
    function navWatch(movie) {
        navigation.navigate('Watch', {
            movieId: movie.id,
            movieTitle: movie.title
        });
    }

    return (
        <View style={styles.container}>
        {data.length == 0 ? (
            <View>
            <Text>No movie rented</Text>
            </View>
        ) : (
            <FlatList
            data={data}
            keyExtractor={ (item) => item?.id?.toString()}
            renderItem={({item}) => (
                <Card
                movie={item}
                toWatch={navWatch}
                isRented={true}
                />
            )}
            />
        )}
        </View>
        //if no data, show <Text>No movie rented</Text>
        // if has movie data, show below:

    )

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            position: 'relative',
        },
        list: {
            flex: 1,
            paddingBottom: 80,
        }
    }
);
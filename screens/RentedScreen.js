import { View, Text, FlatList } from "react-native";
import { useRented } from '../context/Rented';
import Card from '../components/Card';
import { styled } from '../theme/theme';


export default function RentedScreen({ navigation }) {
    const { data } = useRented();
    
    function navWatch(movie) {
        navigation.navigate('Watch', {
            movieId: movie.id,
            movieTitle: movie.title
        });
    }

    return (
        <View style={styled.container}>
        {data.length == 0 ? (
            <View style={styled.container}>
            <Text style={styled.headerText}>No movie rented</Text>
            </View>
        ) : (
            <View style={styled.container}>
                <Text style={styled.headerText}>{data.length} Movies Rented</Text>
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
            </View>
        )}
        </View>
    )
}

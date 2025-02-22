import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "@rneui/themed";
import { styled } from "../theme/theme";

export default function Card({ movie, isRented, toRent, toWatch}) {
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styled.cardContainer}>
            <View style={styled.cardContent}>
                <Image 
                style={styled.image} 
                source={{ uri: url}}
                resizeMode="contain"
                />
                <View>
                    <View style={styled.cardContent}>
                        <Text style={styled.cardTitle}>{movie.title}</Text>
                        <Text style={styled.cardDate}>Release Date: {movie.release_date}</Text>
                        <Text numberOfLines={3}  style={styled.cardOverview}>Overview: {movie.overview}</Text>
                    </View>

                    <View style={styled.cardContent}>
                        {isRented ? (
                            <Button
                            title="Watch movie"
                            onPress={()=> toWatch(movie)}
                            icon={{...styled.cardBtnIconWatch, ...styled.btnIcon}}
                            iconLeft
                            iconContainerStyle={styled.btnIconContainer}
                            titleStyle={styled.btnTitle}
                            buttonStyle={styled.btn}
                            />
                        ) : (
                            <Button
                            title="Rent movie"
                            onPress={()=> toRent(movie)}
                            icon={{...styled.cardBtnIconRent, ...styled.btnIcon}}
                            iconLeft
                            iconContainerStyle={styled.btnIconContainer}
                            titleStyle={styled.btnTitle}
                            buttonStyle={styled.btn}
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

// const styles = StyleSheet.create({
//     cardContainer: {
//         backgroundColor: '#fefefe',
//         margin: 26,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2},
//         shadowOpacity: 0.5,
//     },
//     image: {
//         width: '100%',
//         height: 300,
//     },
//     cardContent: {
//         padding: 8,
//     },
//     title: {
//         marginTop: 10,
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#944654'
//     },
//     date: {
//         marginBottom: 8,
//         fontSize: 16,
//     },
//     overview: {
//         marginBottom: 10,
//         fontSize: 16,
//         lineHeight: 20,
//     },
//     button: {
//         width: '100%',
//         backgroundColor: '#944654',
//         borderRadius: 6,
//         marginTop: 10,
//         marginBottom: 6,
//     }
// })
import { View, Image } from "react-native";
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

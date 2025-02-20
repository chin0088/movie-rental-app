import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "@rneui/themed";
import { color } from "@rneui/base";

export default function Card({ movie, isRented, toRent, toWatch}) {
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Image 
                style={styles.image} 
                source={{ uri: url}}
                resizeMode="contain"
                />
                <View>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.date}>Release Date: {movie.release_date}</Text>
                        <Text numberOfLines={3}  style={styles.overview}>Overview: {movie.overview}</Text>
                    </View>

                    <View style={styles.cardContent}>
                        {isRented ? (
                            <Button style={styles.button}
                            title="Watch movie"
                            onPress={()=> toWatch(movie)}
                            // press button and navigate to watch screen of this movie (match the id?)
                            />
                        ) : (
                            <Button style={styles.button}
                            title="Rent movie"
                            onPress={()=> toRent(movie)}
                            // press this button to save the selected movie details to rented list (async storage)
                            // and will have an alert to tell user the movie is successfully rented
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fefefe',
        margin: 26,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
    },
    image: {
        width: '100%',
        height: 300,
    },
    cardContent: {
        padding: 8,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#944654'
    },
    date: {
        marginBottom: 8,
        fontSize: 16,
    },
    overview: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#944654',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 6,
    }
})
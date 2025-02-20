import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "@rneui/themed";
import { useSearch } from '../context/Search';
import { useRented } from '../context/Rented';
import Card from '../components/Card';
import SearchDialog from '../components/SearchDialog';
import theme from '../theme/theme';
import { useState } from "react";
import RentalDialog from "../components/RentalDialog";


export default function HomeScreen({ navigation }) {
    const { movies, runSearch, removeMov } = useSearch();
    const { addMovieToRented } = useRented();

    const [searchOpen, setSearchOpen] = useState(false);
    // const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [rentDialogOpen, setRentDialogOpen] = useState(false);

    function toRent(movie) {
        setSelectedMovie(movie);
        setRentDialogOpen(true);
    }

    function toConfirmRent(movie) {
        console.log('run addMovieToRented(movie)');
        
        addMovieToRented(movie);
        removeMov(movie.id);
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <FlatList
            data={movies}
            keyExtractor={ (item) => item.id.toString()}
            renderItem={({item}) => (
                <Card
                movie={item}
                isRented={false}
                toRent={toRent}

                />
            )}
            />

            <FAB
            style={styles.fab}
            icon={{ name: 'search', color: 'white'}}
            color="#944654"
            placement="right"
            onPress={()=> setSearchOpen(true)}
            />

            <SearchDialog
            isVisible={searchOpen}
            onSearch={runSearch}
            onClose={()=> setSearchOpen(false)}
            />

            <RentalDialog
            isVisible={rentDialogOpen}
            movie={selectedMovie}
            toConfirm={toConfirmRent}
            onClose={()=> setRentDialogOpen(false)}
            />

        </View>
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
        },
        fab: {
            margin: 16,
            bottom: 16,
            position: 'absolute',
            right: 0,
        }
    }
);
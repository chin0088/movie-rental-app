import { View, Text, FlatList } from "react-native";
import { FAB } from "@rneui/themed";
import { useSearch } from '../context/Search';
import { useRented } from '../context/Rented';
import Card from '../components/Card';
import SearchDialog from '../components/SearchDialog';
import { theme, styled } from "../theme/theme";
import { useState } from "react";
import RentalDialog from "../components/RentalDialog";


export default function HomeScreen({ navigation }) {
    const { movies, runSearch, removeMov } = useSearch();
    const { addMovieToRented } = useRented();

    const [searchOpen, setSearchOpen] = useState(false);
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
        <View style={[styled.container, styled.homePosition]}>
            <Text style={styled.headerText}>Welcome to Movie Rental!</Text>
            <Text style={styled.contentText}>Tap the Search icon and search movies</Text>
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
            style={styled.fab}
            icon={styled.FabIcon}
            color={theme.lightTheme.primary}
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

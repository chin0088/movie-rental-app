import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

const MyRentedContext = createContext();
const KEY = 'rentedList';

function MyRentedProvider(props){
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        try {
            let rentedMovies = await AsyncStorage.getItem(KEY);
            if (rentedMovies) {
                let haveMovies = JSON.parse(rentedMovies)
                setData(haveMovies);
            } else {
                setData([]);
            }
        } catch (error) {
            setData([]);
            console.log('Failed to get data from rented list', error);
        }
    };

    async function addMovieToRented(movie) {
        try {
            console.log('adding movie to rented');
            
            const updatedMovList = [...data, movie];
            await AsyncStorage.setItem(KEY, JSON.stringify(updatedMovList));
            setData(updatedMovList);
            console.log('Updated rented list');
            
        } catch (error) {
            console.log('Failed to add movie to rented list', error);
        }
    };



    async function removeRentedMovie(id) {
        try {
            const updatedMovList = data.filter(movie => movie.id !== id);
            let JsonList = JSON.stringify(updatedMovList);
            await AsyncStorage.setItem(KEY, JsonList);
            setData(updatedMovList);

        } catch (error) {
            console.log('Failed to remove rented movie', error);
            
        }
    }

    return (
        <MyRentedContext.Provider 
        value={{
            data,
            addMovieToRented,
            removeRentedMovie
        }}>{props.children}</MyRentedContext.Provider>
    );

};

function useRented() {
    const context = useContext(MyRentedContext);
    //this gives our hook access to the global-ish context object

    if(!context) throw new Error('Mismatch MisName Context... what were you thinking?');
    return context;
    //when context is returned it returns value={[data,]}
}

export { MyRentedProvider, useRented };
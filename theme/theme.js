import { Dialog } from "@rneui/base";
import { StyleSheet } from "react-native";


export const theme ={
    lightTheme: {
        primary: '#944654',
        secondary: '#D4838C',
        background: '#FFFFFF',
        text: '#000000',
        icon: '#FFFFFF',
        cardBackground: '#fefefe',
        shadow: '#000000',
    },
    darkTheme: {
        primary: '#B25662',
        secondary: '#723741',
        background: '#1A1A1A',
        text: '#FFFFFF',
        icon: '#000000',
        cardBackground: '#403e3e',
        shadow: '#000000',
    }
};

export const navigationStyle = {
    headerStyle: {
        backgroundColor: theme.lightTheme.primary,
    },
    headerTintColor: theme.lightTheme.background,
    headerText: {
        fontWeight: 500,
    }
}

export const styled = StyleSheet.create({
    navBarText: {
        color: theme.lightTheme.background,
        fontWeight: 500,
    },
    container: {
      flex: 1,
      backgroundColor: theme.lightTheme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
        color: theme.lightTheme.primary,
        fontSize: 26,
        fontWeight: 500,
        marginTop: 10,
        marginBottom: 8,
    },
    contentText: {
        fontSize: 18,
    },
    btn: {
        backgroundColor: theme.lightTheme.primary,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 2,
        marginBottom: 2,
    },
    // btnContainer: {
    //     width: 200,
    //     marginHorizontal: 50,
    //     marginVertical: 10,
    // },
    btnIcon: {
        type: 'font-awesome',
        size: 15,
        color: theme.lightTheme.icon,
    },
    btnIconContainer: {
        marginLeft: 10,
    },
    btnTitle: {
        fontWeight: 600,
    },
    cardContainer: {
        backgroundColor: theme.lightTheme.cardBackground,
        marginTop: 16,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        shadowColor: theme.lightTheme.shadow,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 8,
    },
    cardContent: {
        padding: 8,
    },
    cardTitle: {
        marginTop: 10,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#944654'
    },
    cardDate: {
        marginBottom: 8,
        fontSize: 16,
    },
    cardOverview: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 20,
    },
    cardBtnIconWatch: {
        name: 'play',
    },
    cardBtnIconRent: {
        name: 'film',
    },
    contentTitle: {
        color: theme.lightTheme.primary,
        fontSize: 20,
        fontWeight: 500,
        marginTop: 4,
        marginBottom: 4,
    },
    dialogText: {
        fontSize: 14,
        marginTop: 4,
        marginBottom: 4,
    },
    fab: {
        margin: 16,
        bottom: 16,
        position: 'absolute',
        right: 0,
    },
    FabIcon: {
        name: 'search',
        color: theme.lightTheme.icon,
    },
    video: {
        width: 350,
        height: 275,
    },
    markWatchedIcon: {
        name: 'check',
    },
});
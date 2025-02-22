import { Button, Dialog } from '@rneui/themed';
import { Text, View } from 'react-native';
import { styled } from '../theme/theme';

export default function RentalDialog({isVisible, movie, toConfirm, onClose }) {
    const movPrice = (Math.random() * 8.88).toFixed(2);


return (
  <View>
    <Dialog
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <Dialog.Title title="Confirm to rent movie"/>
      <Text style={styled.contentTitle}>{movie?.title}</Text>
      <Text style={styled.dialogText}>Rental Price: ${movPrice}</Text>
      
      <Button 
      title="Confirm" 
      onPress={()=> {
        toConfirm(movie);
        onClose();
      }}
      buttonStyle={styled.btn}
      titleStyle={styled.btnTitle}
      />
      <Button title="Cancel" 
      onPress={onClose}
      buttonStyle={styled.btn}
      titleStyle={styled.btnTitle}
      />
    </Dialog>
  </View>
);
};

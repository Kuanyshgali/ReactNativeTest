import React, {useState} from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';
import styles from './styled';

type MenuPropsType = {};

const Menu: React.FC<MenuPropsType> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={setIsOpen.bind(this, true)}
        style={styles.menuHeaderButton}>
        <Text style={{margin: 0, padding: 0}}>Menu</Text>
      </TouchableOpacity>
      <Modal visible={isOpen}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setIsOpen(false);
              // @ts-ignore
              navigation.navigate('Users');
            }}>
            <Text>Users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsOpen(false);
              // @ts-ignore
              navigation.navigate('Home');
            }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default Menu;

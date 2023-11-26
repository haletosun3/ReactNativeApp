import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Heart from '../assets/heart.png';
import HeartFav from '../assets/heartFav.png';

const Card = ({product, onSelect, setIsFav, isFav, key}) => {
  return (
    product && (
      <TouchableOpacity onPress={onSelect} key={key}>
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: product?.images[0]}} />

          <View style={styles.body_container}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={styles.title}>{product?.description}</Text>
            <Text style={styles.title}>{product?.category}</Text>
            <Text style={styles.price}>{product?.price} $</Text>
          </View>
          <TouchableOpacity style={styles.favContainer} onPress={setIsFav}>
            <Image style={styles.heart} source={isFav ? HeartFav : Heart} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    margin: 8,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    textAlign: 'right',
    fontSize: 14,
    fontStyle: 'italic',
  },
  favContainer: {
    height: 30,
    width: 30,
    margin: 10,
  },
  heart: {
    height: 30,
    width: 30,
  },
});

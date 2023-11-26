import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import Context from '../../context/Context';

import Heart from '../../assets/heart.png';
import HeartFav from '../../assets/heartFav.png';
import SmallCarousel from '../../components/Carousel';
const List = ({route}) => {
  const [fav, setFav] = useState(route.params.item?.isFavorite ? true : false);

  const {value, setValue} = useContext(Context);

  const handleFav = () => {
    const updatedProducts = value?.map(item => {
      console.log('item', item);
      console.log('route.params.item', route.params.item);
      if (item.id === route.params.item.id) {
        item.isFavorite = !item.isFavorite;
        setFav(item.isFavorite);
        return {...item, isFavorite: item.isFavorite};
      } else {
        return item;
      }
    });
    setValue(updatedProducts);
  };
  const i =
    parseInt(route.params.item.price) *
    (parseInt(route.params.item.rating) / 100);
  const d = parseInt(route.params.item.price);
console.log("route.params.item", route.params.item)
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Image
        source={{uri: route.params.item.thumbnail}}
        style={{
          height: 200,
          width: 300,
          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity onPress={handleFav}>
        <Image
          style={{
            height: 30,
            width: 30,
            flexDirection: 'row',
          }}
          source={fav ? HeartFav : Heart}
        />
      </TouchableOpacity>

      <Text>Title:{route.params.item.title}</Text>
      <Text>Category:{route.params.item.category}</Text>
      <Text>Description:{route.params.item.description}</Text>
      <Text>Price:{route.params.item.price}$</Text>
      <Text>Stock:{route.params.item.stock}</Text>
      <Text>
        Price after discountPercentage:
        {d - i}$
      </Text>
      <Text>Rating:%{route.params.item.rating}</Text>
      <SmallCarousel images={route.params.item.images} />
    </View>
  );
};

export default List;

import {
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';

import Card from '../../components/Card';
import Context from '../../context/Context';

const Home = ({navigation}) => {
  const {value, setValue} = useContext(Context);

  const [filteredProducts, setFilteredProducts] = useState(value);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  useEffect(() => {
    const filtered = value?.filter(item => item.isFavorite === true);
    setFavoriteProducts(filtered);
  }, [filteredProducts, modalVisible]);

  const handleProduct = item => () => {
    navigation.navigate('List', {item});
  };

  useEffect(() => {
    setFilteredProducts(value);
  }, [value]);

  console.log('item', {value});
  const toggleFavorite = i => () => {
    const updatedProducts = value?.map(item => {
      if (item.id === i) {
        item.isFavorite = !item.isFavorite;
        return {...item, isFavorite: item.isFavorite};
      } else {
        return item;
      }
    });
    //setValue({...value, products: updatedProducts});
    setFilteredProducts(updatedProducts);
  };
  const renderItem = ({item}) => {
    return (
      <Card
        key={item?.id}
        product={item}
        onSelect={handleProduct(item)}
        setIsFav={toggleFavorite(item?.id)}
        isFav={item?.isFavorite}
      />
    );
  };
  const renderItemFav = ({item}) => {
    return (
      <Card
        key={item?.id}
        product={item}
        onSelect={handleProduct(item)}
        setIsFav={toggleFavorite(item?.id)}
        isFav={item?.isFavorite}
      />
    );
  };

  useEffect(() => {
    filterProducts();
  }, [searchText]);

  const filterProducts = () => {
    const filtered = value?.filter(
      product =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredProducts(filtered);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'silver',
            borderWidth: 1,
            padding: 10,
            margin: 5,
            marginLeft: 10,
            borderRadius: 10,
            width: '80%',
          }}
          placeholder="Ara"
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 50,
            height: 40,
            margin: 5,
            borderRadius: 10,
            borderColor: 'silver',
            borderWidth: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            FAV
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />

      {modalVisible && (
        <Modal
          visible={modalVisible}
          statusBarTranslucent={true}
          animationType={'fade'}>
          <SafeAreaView
            style={{height: '100%', backgroundColor: 'transparent'}}>
            {favoriteProducts?.length !== 0 ? (
              <FlatList
                data={favoriteProducts}
                renderItem={renderItemFav}
                keyExtractor={item => item?.id}
              />
            ) : (
              <Text>Favori Ürün Bulunamadı</Text>
            )}
            <TouchableOpacity
              style={{
                borderColor: 'blue',
                height: 50,
                width: 100,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 1,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Geri
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Home;

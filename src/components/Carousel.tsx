import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const SmallCarousel = props => {
  console.log('okok', props);
  const renderImage = ({item}) => {
    return <Image source={{uri :item}} style={styles.image} resizeMode="contain" />;
  };
  
  return (
    <Carousel
      data={props?.images}
      renderItem={renderImage}
      sliderWidth={300}
      itemWidth={200}
      loop
      autoplay
    />
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
});
export default SmallCarousel;

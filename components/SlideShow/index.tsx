import React, { FC, useEffect, useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useSlides } from '../../hooks/useSlides';
import SlideCard from '../SlideCard';
import { Control, FieldValues } from 'react-hook-form';
import SlideShowStyle from './SlideShowStyle';
import SlidePagination from '../SlidePagination';
import useHistory from '../../hooks/useEditor';
import { SlideState } from '../../types';
import { SlideData } from '../../types/index';
import useEditor from '../../hooks/useEditor';

interface SlideShowProps {
}

const SlideShow: FC<SlideShowProps> = () => {
  const { setSlideId, clearTextId } = useEditor()
  const { width } = useWindowDimensions()
  const slides = useSlides()
  const [page, setPage] = useState(0)
  const pages = slides.length || 0
  const ref = useRef()
  useEffect(() => {
    setSlideId(page)
    clearTextId()
  }, [page])
  return (
    <>
      <Carousel
        ref={ref}
        onSnapToItem={setPage}
        data={slides}
        renderItem={({ item }: { item: SlideData }) => {
          return <View style={[SlideShowStyle.item]} >
            <SlideCard
              data={item} />
          </View>
        }
        }
        sliderWidth={width}
        itemWidth={width}
      />
      <SlidePagination pages={pages} page={page} />
    </>
  )
}

export default SlideShow

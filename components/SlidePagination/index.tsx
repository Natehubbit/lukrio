import React, { FC } from 'react'
import { View, Text } from 'react-native'
import SlidePaginationStyle from './SlidePaginationStyle'

interface SlidePaginationProps {
  pages: number,
  page: number
}

const SlidePagination: FC<SlidePaginationProps> = ({
  pages,
  page
}) => {
  const dots = new Array(pages).fill(0)
  return (
    <View style={[SlidePaginationStyle.container]}>
      {dots.map((_, i) => {
        const isActive = i === page
        return <View
          key={i}
          style={[
            SlidePaginationStyle.dot,
            isActive &&
            SlidePaginationStyle.active]} />
      })}
    </View>
  )
}

export default SlidePagination

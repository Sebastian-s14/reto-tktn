import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { CategoryCard } from '@components'
import { Category } from '@types'
import { Spacer } from '@ui'

const data: Category[] = [
  {
    id: '1',
    name: 'Made Grace',
    image:
      'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
    price: 850,
  },
  {
    id: '2',
    name: 'Swite Home',
    image:
      'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
    price: 999,
  },
  {
    id: '3',
    name: 'Made Grace 2',
    image:
      'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
    price: 350,
  },
  {
    id: '4',
    name: 'Made Grace 2',
    image:
      'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
    price: 750,
  },
  // {
  //   id: '5',
  //   name: 'Made Grace 2',
  //   image:
  //     'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
  //   price: 750,
  // },
  // {
  //   id: '6',
  //   name: 'Made Grace 2',
  //   image:
  //     'https://mltmemkhoc5e.i.optimole.com/ADpOULM-2RR32Bqu/w:auto/h:auto/q:mauto/f:avif/https://rhp.es/wp-content/uploads/2022/04/HAB.5-P.PALACE.jpg',
  //   price: 750,
  // },
]

export const CategoryList = () => {
  return (
    <View style={styles.categories}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <CategoryCard category={item} />}
        ItemSeparatorComponent={() => <Spacer vertical={false} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    display: 'flex',
    flexDirection: 'row',
    rowGap: 8,
  },
})

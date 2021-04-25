import React, {useState, useEffect} from 'react'
import { View,Text, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native'

const data = require('../../assets/data/products.json')
import ProductList from './ProductList'


const ProductContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])

    return(
        <View>
            <Text>Hello sam form Product container</Text>

            <ScrollView>
            <View style={styles.listContainer}>
                
                    {products.map((item) => {
                        return(
                            <ProductList
                       
                                key={item.name}
                                item={item}
                            />
                        )
                    })}
                
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default ProductContainer
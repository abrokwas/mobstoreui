import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { Container, Header, Icon, Item, Input, Text } from 'native-base'

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
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input 
                        placeholder="Search"
                        // onFocus= {}
                        // onChangeText={(text) =>{}}
                    />
                </Item>
            </Header>
            <ScrollView style={styles.container}>
                <Text>product container</Text>
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
        </Container>
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
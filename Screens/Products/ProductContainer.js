import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { Container, Header, Icon, Item, Input, Text } from 'native-base'

const data = require('../../assets/data/products.json')
import ProductList from './ProductList'
import SearchedProducts from './SearchedProducts'


const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState ([]);
    const [focus, setFocus ] = useState();

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () =>{ setFocus(true); }

    const onBlur = () => { setFocus(false); }

    return(
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input 
                        placeholder="Search"
                        onFocus= {openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProducts productsFiltered = {productsFiltered} />
            ) : (
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
            ) }
            
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
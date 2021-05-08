import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { Container, Header, Icon, Item, Input, Text } from 'native-base'

const Data = require('../../assets/data/products.json')
const Categories = require('../../assets/data/categories.json')
import ProductList from './ProductList'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner'
import CategoryFilter from '../Products/CategoryFilter'


const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState ([]);
    const [focus, setFocus ] = useState();
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialSatte] = useState([]);

    useEffect(() => {
        setProducts(Data);
        setProductsFiltered(Data);
        setFocus(false);
        setCategories(Categories);
        setActive(-1);
        setInitialSatte(Data);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialSatte([]);
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
                    {(focus == true) ? (
                        <Icon onPress = {onBlur} name="ios-close" />
                    ): null}
                </Item>
            </Header>
            
            {(focus == true) ? (
                <SearchedProducts productsFiltered = {productsFiltered} />
            ) : (
                <View >
                    <View>
                        <Banner/>
                    </View>
                    <View>
                        <CategoryFilter />
                    </View>
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
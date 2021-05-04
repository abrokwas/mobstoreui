import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src'

var { width } = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        setBannerData([
            "https://dl.airtable.com/.attachmentThumbnails/55689693449c939b7e404074433189f2/bf24eea9",
            "https://dl.airtable.com/.attachmentThumbnails/0962385b5042a931ae706725bcc7d36a/0751f8da",
            "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg"
        ])
        return () => {
            setBannerData([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.swiper} >
                    <Swiper
                    style={{ height: width / 2}}
                    showButton={false}
                    autoplay={true}
                    autoplayTimeout={2}
                    >
                    {bannerData.map((item) => {
                        return(
                            <Image
                                key={item}
                                style={styles.imageBanner}
                                resizeMode="contain"
                                source={{uri: item}}
                            />
                        );
                    }) }
                    </Swiper>
                    <View style={{ height: 20 }} ></View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width : width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner : {
        height: width / 2,
        width : width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner

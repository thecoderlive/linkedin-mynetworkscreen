import React from 'react'
import { Image, TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.user_img}
    source={{uri: item.user_img}}
    />
<Image
    style={styles.profile_pic}
    source={{uri: item.profile_pic}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.post}>{item.post}</Text>
<Text style={styles.mutual_connections}>{item.mutual_connections}</Text>
<TouchableOpacity>
    <View style={styles.connect}>{'Connect'}</View>
</TouchableOpacity>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'user_img': {
        'width': '48vw',
        'height': '18vw',
        'margin': 4,
        'borderTopLeftRadius': 10,
        'borderTopRightRadius': 10
    },
    'profile_pic': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 50
    },
    'user_name': {
        'color': '#050505',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'post': {
        'color': '#707070',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'mutual_connections': {
        'color': '#6c6a6a',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'connect': {
        'flex': 1,
        'padding': 10,
        'margin': 5,
        'textAlign': 'center',
        'backgroundColor': '#f3f7f6',
        'color': '#378fe1'
    }
});
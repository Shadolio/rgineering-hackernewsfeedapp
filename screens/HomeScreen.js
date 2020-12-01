import React, { useState } from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import decClassItemSelector from '../model/DecimalClassifierElementSelector';
import fetchPosts from '../model/PostsSource';

const extendPostsOnEndReached = (posts, new_post_date) => {
    var newPost = fetchPosts(2, 10).pop();
    newPost.date = new_post_date.toString();
    posts.push(newPost);
}

const HomeScreen = ({ navigation }) => {

    const [ isRefreshing, setIsRefreshing ] = useState(false);

    var posts = [];

    const refreshPosts = () => {
        setIsRefreshing(true);
        fetchPosts(2, 10).forEach((post) => { posts.push(post) });
        setIsRefreshing(false);
    }

    const PostItem = ({ item, index, sep }) => {
        
        const backgrounds = [ '#1D7E00', '#FF00FF' ];
      
        const itemBackground = decClassItemSelector(index, 3, backgrounds);
      
        return (
        <TouchableOpacity style={{backgroundColor: itemBackground}}
        onPress={() => navigation.navigate('PostDetail', { post: item })}>
            <Text>Post Date: {item.date}</Text>
            <Text>Author: {item.author}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight: 'bold'}} >{item.description}</Text>
            <Text>Number of comments: {item?.comments ? item.comments.length : ""}</Text>
        </TouchableOpacity>
        );
    };

    const seperator = () => {
        return (
            <Text>------</Text>
        );
    };

    const emptyList = () => {
        return (
            <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}><Text>It seems that there are no more hackers. How about reading about Culture?</Text></View>
        );
    };

  return (
    <SafeAreaView>
      <FlatList
      data={posts}
      renderItem={PostItem}
      keyExtractor={(item) => item.date}
      ItemSeparatorComponent={seperator}
      ListEmptyComponent={emptyList}
      onEndReached={(info) => { extendPostsOnEndReached(posts, Date.now()) }}
      onRefresh={refreshPosts}
      refreshing={isRefreshing}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
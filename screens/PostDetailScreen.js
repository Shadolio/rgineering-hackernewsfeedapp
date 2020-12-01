import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const PostDetailScreen = ({ navigation, route }) => {

    const CommentView = ({ item, index, sep }) => {
        return (
            <View>
                <Text>[{item.id}] {item.author}: {item.content}</Text>
            </View>
        );
    }

    const PostDetailView = ({ post }) => {
        return (
            <SafeAreaView>
                <Text>Post Date: {post.date}</Text>
                <Text>Author: {post.author}</Text>
                <Text>Content:</Text>
                <Text>{post.longDescription}</Text>
                <Text>Comments:</Text>
                <FlatList
                data={post.comments}
                renderItem={CommentView}
                keyExtractor={(comment) => comment.id}
                />
            </SafeAreaView>
        );
    };

    return (
        <PostDetailView post={route.params.post} />
    );
};

export default PostDetailScreen;
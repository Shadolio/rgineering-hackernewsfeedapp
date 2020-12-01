import * as React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import decClassItemSelector from '../model/DecimalClassifierElementSelector';

const samplePostGenerator = (post_date) => {
    return {
        date: post_date,
        author: "Shadi Barghash",
        shortDescription: "This is the first post von Shadi.",
        comments: [
            {
                id: '1',
                author: "Mohammed",
                content: "Great Job, Shadi!"
            },
            {
                id: '2',
                author: "Ali",
                content: "Menawwar el denya!!"
            }
        ]
    }
}

const posts = [
    samplePostGenerator("22/11/2020"),
    samplePostGenerator("23/11/2020"),
    samplePostGenerator("24/11/2020"),
    samplePostGenerator("25/11/2020")
];

const HomeScreen = ({ navigation }) => {

    const PostItem = ({ item, index, sep }) => {
        
        const backgrounds = [ '#1D7E00', '#FF00FF' ];
      
        const itemBackground = decClassItemSelector(index, 3, backgrounds);
      
        return (
        <TouchableOpacity style={{backgroundColor: itemBackground}}
        onPress={() => navigation.navigate('PostDetail', { post: item })}>
            <Text>Post Date: {item.date}</Text>
            <Text>Author: {item.author}</Text>
            <Text>{item.shortDescription}</Text>
            <Text>Number of comments: {item.comments.length}</Text>
        </TouchableOpacity>
        );
    };

  return (
    <SafeAreaView>
      <FlatList
      data={posts}
      renderItem={PostItem}
      keyExtractor={(item) => item.date} />
    </SafeAreaView>
  );
};

export default HomeScreen;
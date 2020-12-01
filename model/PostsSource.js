const samplePostGenerator = (post_date) => {
    return {
        date: post_date,
        author: "Shadi Barghash",
        description: "This is the first post von Shadi.",
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

const fetchPosts = (olderThanDateOrId, maximum_count = 10) => {
    var posts = [
        samplePostGenerator("17/11/2020"),
        samplePostGenerator("18/11/2020"),
        samplePostGenerator("19/11/2020"),
        samplePostGenerator("20/11/2020"),
        samplePostGenerator("21/11/2020"),
        samplePostGenerator("22/11/2020"),
        samplePostGenerator("23/11/2020"),
        samplePostGenerator("24/11/2020"),
        samplePostGenerator("25/11/2020"),
        samplePostGenerator("26/11/2020")
    ];
    return posts;
};

export default fetchPosts;
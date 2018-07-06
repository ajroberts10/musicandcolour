import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from 'graphql';
import config from '../../config/config';

const BASE_URL = 'https://api.soundcloud.com';

const fetchResponseByURL = relativeURL => {
    return fetch(`${BASE_URL}${relativeURL}?client_id=${config.key}`).then(res => res.json());
};

const fetchTracks = () => {
    return fetchResponseByURL('/playlists/85980757').then(json => json.body);
};

const fetchTrackByURL = relativeURL => {
    return fetchResponseByURL(relativeURL).then(json => json.body);
}

const TrackType = new GraphQLObjectType({
    name: 'Track',
    description: 'A Music&Colour demo track',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        stream_url: { type: GraphQLString }
    })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'a query...',
    fields: () => ({
        allTracks: {
            type: new GraphQLList(TrackType),
            resolve: root => fetchTracks()
        },
        track: {
            type: TrackType,
            args: {
                id: { type: GraphQLString }
            },
            resolve: (root, args) => fetchTrackByURL(`/tracks/${args.id}`)
        }
    })
});

export default new GraphQLSchema({
    query: QueryType,
});

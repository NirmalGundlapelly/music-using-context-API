import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Component} from 'react';

import Data from '../../../context/Data';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import blur from '../../images/blur.png';

import LinearGradient from 'react-native-linear-gradient';
import {MusicContext} from '../../../context/MusicContext';

const {height, width} = Dimensions.get('window');

interface IProps {
  navigation: any;
}

interface IState {
  openModal: boolean;
  songDetails: any;
  selectedId: string;
}

export default class Home extends Component {
  state = {openModal: false, songDetails: {}, selectedId: ''};

  static contextType = MusicContext;

  handleModal = (item: any) => {
    console.log('clicked.......', item);
    this.setState({openModal: true, songDetails: item, selectedId: item.id});
  };

  // daily mix item
  renderDailyMix = (item: any) => {
    const image = item.artwork;
    return (
      <TouchableOpacity onPress={() => this.handleModal(item)}>
        <View style={{marginRight: 10, marginTop: 10}}>
          <Image
            source={{uri: image}}
            style={{height: 109, width: 109, borderRadius: 10}}
          />
          <FontAwesome
            marginLeft={110}
            name="play-circle-o"
            size={30}
            color={'#251741'}
            style={{position: 'absolute', bottom: 37}}
          />
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderCarts = (product: any) => {
    const item = {...product, isFavorite: false};
    const image = item.artwork;
    return (
      <TouchableOpacity onPress={() => this.handleModal(item)}>
        <View
          style={{
            marginRight: 10,
            marginTop: 10,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', marginLeft: 1}}>{item.id}</Text>
            <Image
              source={{uri: image}}
              style={{height: 50, width: 50, borderRadius: 2, marginLeft: 10}}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'white', textAlign: 'left'}}>
                {item.title}
              </Text>
              <Text style={{color: 'white', textAlign: 'left'}}>
                {item.artist}
              </Text>
            </View>
          </View>
          {this.state.selectedId == product.id && (
            <Ionicons
              name="pause-circle"
              style={{position: 'absolute', right: 50}}
              // name="pause"
              size={27}
              color={'white'}
            />
          )}

          <FontAwesome
            marginRight={10}
            name="arrow-circle-o-down"
            size={30}
            color={'#844DFB'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const musicData = Data;
    const {playlist, isFavorite, handleFavorite} = this.context;
    console.log('playList........', playlist);
    return (
      <View style={styles.homeContainer}>
        {/* trending */}
        <View style={styles.settingContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#844DFB',
                fontWeight: '600',
                fontSize: 20,
                marginRight: 30,
              }}>
              For You
            </Text>
            <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
              Trending
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Ionicons
              marginRight={20}
              name="notifications-outline"
              size={25}
              color={'white'}
            />
            <Feather name="settings" size={25} color={'white'} />
          </View>
        </View>
        {/* recently played */}
        <View style={styles.recentlyPlayedContainer}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
            Recently Played
          </Text>
          <View style={styles.recentlyCard}>
            <View>
              <Image
                style={{width: 160, height: 150, borderRadius: 10}}
                source={{
                  uri: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
                }}
              />
              <Image
                style={{
                  width: 160,
                  height: 140,
                  borderRadius: 10,
                  position: 'absolute',
                  left: 10,
                  top: 5,
                  zIndex: -1,
                }}
                source={{
                  uri: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
                }}
              />
              <Image
                style={{
                  width: 160,
                  height: 130,
                  borderRadius: 10,
                  position: 'absolute',
                  left: 20,
                  top: 10,
                  zIndex: -2,
                }}
                source={{
                  uri: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
                }}
              />
            </View>
            <View style={{marginRight: 20}}>
              <Text style={{color: 'white', marginBottom: 20, marginTop: 10}}>
                1.Man on the moon
              </Text>
              <Text style={{color: 'white', marginBottom: 20}}>
                2.Milky way (Rupe...
              </Text>
              <Text style={{color: 'white', marginBottom: 10}}>
                3.Big Picture (Lon...
              </Text>
              <FontAwesome
                marginLeft={100}
                name="play-circle-o"
                size={30}
                color={'#d4c7f0'}
              />
            </View>
          </View>
        </View>
        {/* Daily Mix */}
        <View style={{margin: 20}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
            Daily Mix
          </Text>
          <FlatList
            horizontal
            data={musicData}
            renderItem={({item}: any) => this.renderDailyMix(item)}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        {/* Charts */}
        <View
          style={{
            marginHorizontal: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 17}}>
            Charts
          </Text>
          <Text style={{color: '#844DFB', fontWeight: '600', fontSize: 17}}>
            More
            <AntDesign
              marginLeft={100}
              name="right"
              size={16}
              color={'#844DFB'}
            />
          </Text>
        </View>
        {/* Charts Card */}
        <LinearGradient
          style={styles.cartCard}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['rgba(217, 217, 217, 0.23)', 'rgba(217, 217, 217, 0.06)']}>
          <View style={{height: 180}}>
            {/* Top 100 Text */}
            <View
              style={{
                marginHorizontal: 14,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 13}}>
                Top 100 Nigeria
              </Text>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 13}}>
                More
                <AntDesign
                  marginLeft={100}
                  name="right"
                  size={12}
                  color={'white'}
                />
              </Text>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={musicData}
              renderItem={({item}: any) => this.renderCarts(item)}
              keyExtractor={(item: any) => item.id}
            />
          </View>
        </LinearGradient>

        {/* Modal */}

        <Modal animationType="slide" visible={this.state.openModal}>
          <View style={styles.songModalContainer}>
            <View style={styles.topHeader}>
              <FontAwesome
                onPress={() => this.setState({openModal: false})}
                marginRight={10}
                name="angle-down"
                size={30}
                color={'white'}
              />
              <Text style={{color: 'white', fontSize: 20}}>
                "Top 100 Nigeria"
              </Text>
              <Entypo
                marginRight={10}
                name="dots-three-horizontal"
                size={30}
                color={'white'}
              />
            </View>

            <View style={styles.imageContainer}>
              <Image
                style={{
                  borderRadius: 20,
                  width: width / 1.2,
                  height: height / 2.8,
                }}
                resizeMode="cover"
                source={{
                  uri: this.state.songDetails.artwork,
                }}
              />
              <ImageBackground source={blur}>
                <View style={styles.songNameContainer}>
                  <View>
                    <Text style={styles.songNameText}>
                      {this.state.songDetails.title}
                    </Text>
                    <Text style={styles.songDesText}>
                      {this.state.songDetails.artist}
                    </Text>
                  </View>

                  <MaterialIcons
                    onPress={() =>
                      handleFavorite({
                        ...this.state.songDetails,
                        isFavorite: true,
                      })
                    }
                    name="favorite"
                    size={25}
                    color={
                      playlist.find(
                        each => each.id == this.state.songDetails.id,
                      )
                        ? playlist.find(
                            each => each.id == this.state.songDetails.id,
                          ).isFavorite
                          ? 'red'
                          : 'white'
                        : 'white'
                    }
                  />
                </View>
                <View style={styles.songBarContainer}>
                  <View style={styles.songBarFilled}></View>
                  <View style={styles.songBarEmpty}></View>
                </View>

                <View style={styles.songBarTimeContainer}>
                  <Text style={styles.songTime}>2:01</Text>
                  <Text style={styles.songTime}>-1:07</Text>
                </View>

                <View style={styles.songArrowButtonsContainer}>
                  <Ionicons name="shuffle" size={25} color={'white'} />
                  <AntDesign name="stepbackward" size={32} color={'white'} />
                  <TouchableWithoutFeedback>
                    <Ionicons
                      name="pause-circle"
                      // name="pause"
                      size={57}
                      color={'white'}
                    />
                  </TouchableWithoutFeedback>
                  <AntDesign name="stepforward" size={32} color={'white'} />
                  <FontAwesome name="repeat" size={25} color={'white'} />
                </View>
              </ImageBackground>

              <View style={styles.songArrowButtonsContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="music-note-bluetooth"
                    size={38}
                    color={'white'}
                  />
                  <Text style={{color: 'white', marginLeft: 10}}>Earpods</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo name="share-alternative" size={32} color={'white'} />
                  <Fontisto
                    onPress={() => {
                      this.setState({openModal: false});
                      this.props.navigation.navigate('Playlist');
                    }}
                    marginLeft={20}
                    name="play-list"
                    size={25}
                    color={'white'}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#100724',
    flex: 1,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    marginTop: 10,
  },
  recentlyPlayedContainer: {
    marginHorizontal: 14,
  },
  recentlyCard: {
    backgroundColor: '#1c1038',
    borderColor: '#6a6378',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartCard: {
    height: 187,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 5,
  },

  // modal
  songModalContainer: {
    backgroundColor: '#100724',
    flex: 1,
    padding: 20,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  songContainer: {
    backgroundColor: '#33322f',
    padding: 20,
    height: height / 1.031,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  musicText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  imageContainer: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songNameContainer: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.2,
  },
  songNameText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  songDesText: {
    color: '#ccc9c0',
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    width: width / 1.2,
    marginTop: 20,
  },
  songBarFilled: {
    backgroundColor: 'white',
    width: width / 2.1,
    height: 5,
  },
  songBarEmpty: {
    backgroundColor: '#4a4c7d',
    width: width / 3,
    height: 4,
  },
  songBarContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  songBarTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.3,
    marginTop: 15,
  },
  songTime: {
    color: 'white',
  },
  songArrowButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 1.2,
    marginTop: 20,
    marginBottom: 80,
  },
});

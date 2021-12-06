import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Modal, Pressable, FlatList} from 'react-native';
import styles from './Detail.style';

const Detail = () => {
  const data = [
    {
      id: 'a4f1a3da-5557-11ec-bf63-0242ac130002',
      movieId: 'b973b3ec-5553-11ec-bf63-0242ac130002',
      comment:
        'Consequat reprehenderit sunt deserunt laboris nostrud irure consectetur fugiat anim qui. Id excepteur dolore aliquip quis fugiat sunt consequat exercitation cupidatat mollit minim. Ullamco sunt dolor laborum tempor anim. Ad labore occaecat mollit exercitation voluptate anim quis. Velit sint proident dolore velit tempor enim non laborum sint elit irure ullamco dolore reprehenderit. Est laborum aute consectetur ea quis pariatur sint. Anim adipisicing excepteur aliquip quis aliqua excepteur tempor reprehenderit excepteur tempor esse aliqua duis.',
    },
    {
      id: 'a4f1a4b6-5557-11ec-bf63-0242ac130002',
      movieId: 'b973b3ec-5553-11ec-bf63-0242ac130002',
      comment:
        'Eiusmod nisi enim dolor et in aliqua laborum pariatur proident mollit velit laboris dolore. Minim officia nulla culpa sit. Aliquip officia laborum laboris ut elit irure pariatur consectetur labore. Velit qui commodo anim id. Pariatur sit labore nulla ullamco ipsum laborum anim ut. Amet cupidatat nostrud voluptate adipisicing dolor.',
    },
    {
      id: 'a4f1a66e-5557-11ec-bf63-0242ac130002',
      movieId: 'b973b3ec-5553-11ec-bf63-0242ac130002',
      comment:
        'Labore ipsum magna nostrud proident laborum officia. Cillum aliquip ea esse nisi reprehenderit elit consequat culpa aliquip aliquip. Consequat elit reprehenderit labore nostrud exercitation deserunt ullamco qui ullamco non enim. Reprehenderit veniam adipisicing proident elit consectetur nulla veniam in eiusmod ex eiusmod. Minim nostrud officia esse do laboris velit officia qui fugiat.',
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const {movie} = route.params;

  const renderComment = ({item}) => {
    return (
      <View>
        <Text>{item.comment}</Text>
      </View>
    );
  };
  const onCloseModal = () => {
    setModalVisible(false);
  };
  const onShowComment = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={onCloseModal}>
        <View>
          <FlatList data={data} renderItem={renderComment} />
          <Text>Input ve Gonder Butonu</Text>
        </View>
      </Modal>
      <Pressable onPress={onShowComment}>
        <Text>Show Comment</Text>
      </Pressable>
    </View>
  );
};
export default Detail;

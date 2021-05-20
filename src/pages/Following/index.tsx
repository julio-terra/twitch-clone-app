import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

import { Container, Wrapper, Main } from './styles';

interface Item{
  key: String;
  render: () => JSX.Element;
  isTittle?: boolean;
}

function Following() {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />
      },
      {
        key: 'FOLLOWED-CATEGORIES',
        render: () => <View />,
        isTittle: true
      },
      {key: 'C1', render: () => <View />},
      {
        key: 'LIVE_CHANNELS',
        render: () => <View />,
        isTittle: true
      },
      {key: 'C2', render: () => <View />},
      {
        key: 'CONTINUE-WATCHING',
        render: () => <View />,
        isTittle: true
      },
      {key: 'C3', render: () => <View />},
      {
        key: 'OFFLINE-CHANNELS',
        render: () => <View />,
        isTittle: true
      },
      {key: 'C4', render: () => <View />},
      
    ]
    const indices: Number[] = [];

    items.forEach((item, index) => item.isTittle && indices.push(index));

    return {
      data: items,
      indices,
    }
  }, []);
  return (
    <Wrapper>
      <Container>
      <Header />
      <Main>
        <FlatList<Item>
        data={data}
        renderItem={({ item }) => item.render()}
        keyExtractor={item => item.key}
        stickyHeaderIndices={indices}
        //Refresh effect
        onRefresh={() => {}}
        refreshing={false}
        />
      </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;

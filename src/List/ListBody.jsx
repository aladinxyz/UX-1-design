import React, { Component } from 'react';
import { css } from 'react-emotion';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import Spin from 'antd/lib/spin';
import DEV from '../DEV';
import Button from '../Button';
import Progress from '../utils/Progress';
import { ListTableItems } from './List.styles';
import { contextToProps } from './ListContext';

const buttonStyles = css`
  border-radius: 0px;
`;
@contextToProps('Item', 'Body', 'List', 'show')
@inject('listStore')
@observer
class ListBody extends Component {
  render() {
    const {
      listStore,
      Item,
      Body = 'div',
      List,
      show = {},
      ...props
    } = this.props;
    
    return (
      <ListTableItems {...props} className={Progress.parentClassName}>
        <Progress.Bar id="progress" />
        {/* 1) загружаем первый раз
        2) загружаем второй раз, меняя фильтры
        3) загружаем второй раз, меняя skip, фильтры не меняются
        4) до загружаем второй раз, используя fetch next / fetch prev
        */}
        <Spin
          size="large"
          spinning={listStore.loading}
        >
          <If condition={show.more && listStore.canFetchMore(-1)}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={() => listStore.fetchMore(-1)}
              disabled={listStore.loading}
              className={buttonStyles}
              block
            >
              <If condition={listStore.loading}>
                Loading
              </If>
              <If condition={!listStore.loading}>
                Загрузить еще
              </If>
            </Button>
          </If>
          <Body style={{ minHeight: 200 }}>
            <If condition={listStore.items.length === 0}>
              <List.Empty />
            </If>
            {listStore.map((item, index) => {
              if (item === null) {
                return (
                  <Button onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}>
                    load
                  </Button>
                );
              }
              if (!Item) return <DEV json="!Item" />;
              return <Item key={item._id || item.id || index} item={item} />;
            })}
          </Body>
          <If condition={show.more && listStore.canFetchMore(1)}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={() => listStore.fetchMore(-1)}
              disabled={listStore.loading}
              className={buttonStyles}
              block
            >
              <If condition={listStore.loading}>
                Loading
              </If>
              <If condition={!listStore.loading}>
                Загрузить еще
              </If>
            </Button>
          </If>
        </Spin>
      </ListTableItems>

    );
  }
}

export default ListBody;

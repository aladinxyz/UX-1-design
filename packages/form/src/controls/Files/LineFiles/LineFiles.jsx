import React from 'react';
import {
  Wrapper,
  Items,
  Memory,
  Button,
  LineFilesWrapper,
} from './LineFiles.styles';


const LineFiles = ({ files }) => (
  <LineFilesWrapper>
    {files.map((file, i) => (
      <Wrapper key={i}>
        <Items>
        Приложенные файлы: {file.amount}
        </Items>
        <Memory>
         ({file.size})
        </Memory>
        <Button>Скачать</Button>
      </Wrapper>
  ))}
  </LineFilesWrapper>
);

export default LineFiles;

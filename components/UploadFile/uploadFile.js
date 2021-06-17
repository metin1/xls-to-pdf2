import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import * as XLSX from 'xlsx';
import { toast } from '@/utils/toaster';

const imageMaxSize = 15 * 1024 * 1024; // bytes
const acceptedFileTypes =
  'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => {
  return item.trim();
});

const UploadImage = React.memo(
  () => {
    // let data = []
    const [data, setData] = useState([])
    const [fileState, setFileState] = useState({
      file: '',
      imagePreviewURL: '/icons/upload.svg',
    });

    const [convertData, setConvertData] = useState();

    async function handleFileChange(e) {
      e.preventDefault();
      const file = e.target.files[0];
      if (!file) return;
      const currentFile = file;
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        toast('Dosya boyutu 15mb dan büyük', 'warning', 9000);
        return;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        toast('Sadece XLS, XLSX dosyası ekleyebilirsiniz', 'warning');
        return;
      }
      setFileState({ ...fileState, file: file });
    }

    const readFile = () => {
      var f = fileState.file;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const xlsData = XLSX.utils.sheet_to_json(ws);
        setData(xlsData)
        if (xlsData.length > 0) {
          setConvertData(xlsData);
        }
      };
      reader.readAsBinaryString(f);
    };

    const renderLine = () => {
      let table = [];
      if (!convertData) {
        return;
      }
      for (let index = 0; index < convertData.length - 2; index++) {
        const element = convertData[index];
        table.push(
          <div
            style={{
              margin: 13,
              minWidth: 300,
              width: 800,
              maxWidth: 1200,
            }}>
            <div
              className='product-container'
              style={{
                padding: 13,
                border: 'solid 1px #96a5aa',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fffff1'
              }}>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                }}>
                Ürün Adı:{element.ProductName}
              </div>
              <div> {element.ProductCode}</div>
            </div>
            <div
              style={{
                padding: 13,
                borderLeft: 'solid 1px #96a5aa',
                borderRight: 'solid 1px #96a5aa',
                backgroundColor: 'white'
              }}>
                <img
                style={{ maxHeight: '300px' }}
                src={element.Image1}
                alt={element.ProductName}
              />
            </div>

            <div
              style={{
                padding: 13,
                border: 'solid 1px #96a5aa',
                backgroundColor: '#f1f4fb'
              }}>
              Fiyat: {element.perakendesatisfiyat}
            </div>
            <br />
          </div>
        );
      }
      return table;
    };

    const renderRow = ({ index, key, style }) => (
      <div
            style={{
              margin: 13,
              minWidth: 800,
            }}>
            <div
              className='product-container'
              style={{
                padding: 13,
                border: 'solid 1px #96a5aa',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                }}>
                Ürün Adı:{data[index].ProductName}
              </div>
              <div> {data[index].ProductCode}</div>
            </div>
            <div
              style={{
                padding: 13,
                borderLeft: 'solid 1px #96a5aa',
                borderRight: 'solid 1px #96a5aa',
              }}>
              <img
                style={{ maxHeight: '300px' }}
                src={data[index].Image1}
                alt={data[index].ProductName}

              />
            </div>

            <div
              style={{
                padding: 13,
                border: 'solid 1px #96a5aa',
              }}>
              Fiyat: {data[index].perakendesatisfiyat}
            </div>
            <br />
          </div>
    )

    return (
      <div className='picture-container'>
        <div className='grid-r-4 mt-4'>
          <label htmlFor='file-input' className='custom-file-upload my-16'>
            <Button variant='outlined' color='primary' component='div'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='17'
                viewBox='0 0 20 17'
                className='mr-9'>
                <path
                  d='M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z'
                  fill='var(--primary-color)'
                />
              </svg>{' '}
              <span>Bir dosya seçiniz</span>
            </Button>
            <input
              type='file'
              size='60'
              accept={acceptedFileTypes}
              multiple={false}
              id='file-input'
              onChange={(e) => handleFileChange(e)}
            />
          </label>
          {fileState.file && (
            <div style={{marginTop: 6}}>
              <div>Seçilen dosya : {fileState.file.name}</div>
              <Button   style={{marginTop: 6}} variant='contained' color='primary' onClick={readFile}>
                Cevir
              </Button>
            </div>
          )}
        </div>
            {/* {data.length  }
            {data.length &&  <List
      width={1400}
      height={700}
      itemCount={data.length}
      itemSize={120}
    >
      {renderRow}
    </List>} */}
        {/* {data.length > 0 && <List
          width={900}
          height={1200}
          rowRenderer={renderRow}
          rowCount={data.length}
          rowHeight={300}
        />} */}

        <div>{renderLine()}</div>

        <style jsx>
          {`
            input[type='range'] {
              -webkit-appearance: none;
              margin: 10px 0;
              width: 100%;
              max-width: 300px;
            }
            input[type='range']:focus {
              outline: none;
            }
            input[type='range']::-webkit-slider-runnable-track {
              width: 100%;
              height: 12.8px;
              cursor: pointer;
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
              background: var(--primary-color);
              border-radius: 25px;
              border: 0px solid #000101;
            }
            input[type='range']::-webkit-slider-thumb {
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
              border: 0px solid #000000;
              height: 20px;
              width: 39px;
              border-radius: 7px;
              background: #65001c;
              cursor: pointer;
              -webkit-appearance: none;
              margin-top: -3.6px;
            }
            input[type='range']:focus::-webkit-slider-runnable-track {
              background: var(--primary-color);
            }
            input[type='range']::-moz-range-track {
              width: 100%;
              height: 12.8px;
              cursor: pointer;
              animate: 0.2s;
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
              background: var(--primary-color);
              border-radius: 25px;
              border: 0px solid #000101;
            }
            input[type='range']::-moz-range-thumb {
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
              border: 0px solid #000000;
              height: 20px;
              width: 39px;
              border-radius: 7px;
              background: #65001c;
              cursor: pointer;
            }
            input[type='range']::-ms-track {
              width: 100%;
              height: 12.8px;
              cursor: pointer;
              animate: 0.2s;
              background: transparent;
              border-color: transparent;
              border-width: 39px 0;
              color: transparent;
            }
            input[type='range']::-ms-fill-lower {
              background: var(--primary-color);
              border: 0px solid #000101;
              border-radius: 50px;
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
            }
            input[type='range']::-ms-fill-upper {
              background: var(--primary-color);
              border: 0px solid #000101;
              border-radius: 50px;
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
            }
            input[type='range']::-ms-thumb {
              box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
              border: 0px solid #000000;
              height: 20px;
              width: 39px;
              border-radius: 7px;
              background: #65001c;
              cursor: pointer;
            }
            input[type='range']:focus::-ms-fill-lower {
              background: var(--primary-color);
            }
            input[type='range']:focus::-ms-fill-upper {
              background: var(--primary-color);
            }

            input[type='file'] {
              display: none;
            }

            .custom-file-upload {
              display: inline-block;
              cursor: pointer;
            }

            .picture-container {
              position: relative;
              cursor: pointer;
              text-align: center;
            }

            .product-container {
              position: relative;
              cursor: pointer;
              text-align: center;
              padding: 13px;
              border: solid 1px #96a5aa;
            }

            .picture-container .picture {
              width: 106px;
              height: 106px;
              background-color: var(--bg-primary);
              border: 4px solid var(--text-hint);
              color: var(--bg-paper);
              border-radius: 50%;
              margin: 5px auto;
              overflow: hidden;
              transition: all 0.2s;
              -webkit-transition: all 0.2s;
            }
            .picture-container .picture:hover {
              border-color: var(--primary-color);
            }
            .picture-container .picture input[type='file'] {
              cursor: pointer;
              display: block;
              height: 100%;
              left: 0;
              opacity: 0 !important;
              position: absolute;
              top: 0;
              width: 100%;
            }
            .picture-container .picture-src {
              width: 100%;
            }
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              padding-left: 13px;
              text-align: left;
            }
          `}
        </style>
      </div>
    );
  }
);

export default UploadImage;

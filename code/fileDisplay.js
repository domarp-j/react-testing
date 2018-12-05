const FileDisplay = file => (
  <div className='uploaded-file'>
    <div>File name: {file.name}</div>
    <div>Preview: {file.preview}</div>
    <div>Size: {file.size}</div>
  </div>
)

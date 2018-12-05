class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] }
  }

  render() {
    return (
      <div>
        {this.state.files.map(file => <FileDisplay file={file} />)}
        <div class='file-drop-area'>
          <input type='file' name='file-upload' />
          <button type='submit' value='Submit' />
        </div>
      </div>
    )
  }
}

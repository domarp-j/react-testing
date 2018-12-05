class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] }
  }

  handleDrop = file => {
    this.setState(prevState => ({ files: prevState.push(file) }))
  }

  render() {
    return (
      <div>
        {this.state.files.map(file => <FileDisplay file={file} />)}
        <FileDrop class='file-drop-area' onDrop={this.handleDrop} />
      </div>
    )
  }
}

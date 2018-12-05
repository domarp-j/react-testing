describe('FileUpload', () => {
  it('adds a file to state when it is dropped', () => {
    const component = mount(<FileUpload />);
    component.fireEvent('drop', testFile);
    expect(component.find('.uploaded-file')).toHaveLength(1);
    ... and/or ...
    expect(component.findText(testFile.name)).toHaveLength(1);
    expect(component.findText(testFile.preview)).toHaveLength(1);
    expect(component.findText(testFile.size)).toHaveLength(1);
  });
});

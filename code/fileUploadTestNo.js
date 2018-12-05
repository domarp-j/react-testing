describe('FileUpload', () => {
  it('adds a file to state when it is dropped', () => {
    const component = mount(<FileUpload />);
    component.fireEvent('drop', testFile);
    expect(component.state()).toContain(testFile);
  });
});

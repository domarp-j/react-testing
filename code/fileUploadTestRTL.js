describe('FileUpload', () => {
  it('adds a file to state when it is dropped', async () => {
    const { getByText } = render(<FileUpload />);
    fireEvent.drop(testFile);
    await waitForElement(() => getByText(testFile.name));
    expect(getByText(testFile.name)).toHaveLength(1);
    expect(getByText(testFile.preview)).toHaveLength(1);
    expect(getByText(testFile.size)).toHaveLength(1);
  });
});

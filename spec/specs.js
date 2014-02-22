describe('numsToWords', function() {
  it('returns the written word for an inputted number less than 10', function() {
    numsToWords(8).should.equal('eight');
  });
  it('returns the written word for an inputted number less than 20', function() {
    numsToWords(17).should.equal('seventeen');
  });
  it('returns the written words for an inputted number less than 100', function() {
    numsToWords(37).should.equal('thirty seven');
  });
  it('returns the written words for an inputted number less than 1000', function() {
    numsToWords(238).should.equal('two hundred thirty eight');
  });
  it('returns the written words for an inputted number less than 10000', function() {
    numsToWords(4500).should.equal('four thousand five hundred');
  });
});

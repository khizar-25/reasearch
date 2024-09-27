import React, { useState } from 'react';
import './App.css'; // Import your CSS file here

const App = () => {
  const [submissionType, setSubmissionType] = useState('');

  // Function to render conditional fields based on submission type
  const renderFields = () => {
    switch (submissionType) {
      case 'Journal':
        return (
          <div className="input-group">
            <label htmlFor="journal_name">Journal Name</label>
            <input type="text" id="journal_name" name="journal_name" />

            <label htmlFor="journal_title">Journal Title</label>
            <input type="text" id="journal_title" name="journal_title" />

            <label htmlFor="journal_publisher">Journal Publisher</label>
            <input type="text" id="journal_publisher" name="journal_publisher" />

            <label htmlFor="doi_journal">DOI</label>
            <input type="text" id="doi_journal" name="doi_journal" />

            <div className="checkbox-group">
              <label>Indexing:</label>
              <input type="checkbox" id="scopus_journal" name="indexing_journal" value="Scopus Indexed" />
              <label htmlFor="scopus_journal">Scopus Indexed</label>

              <input type="checkbox" id="sci_journal" name="indexing_journal" value="SCI Indexed" />
              <label htmlFor="sci_journal">SCI Indexed</label>
            </div>

            <label htmlFor="upload_journal">Upload Journal</label>
            <input type="file" id="upload_journal" name="upload_journal" />
          </div>
        );
      case 'Conference':
        return (
          <div className="input-group">
            <label htmlFor="conference_title">Conference Title</label>
            <input type="text" id="conference_title" name="conference_title" />

            <label htmlFor="conference_name">Conference Name</label>
            <input type="text" id="conference_name" name="conference_name" />

            <label htmlFor="conference_publisher">Conference Publisher</label>
            <input type="text" id="conference_publisher" name="conference_publisher" />

            <label htmlFor="doi_conference">DOI</label>
            <input type="text" id="doi_conference" name="doi_conference" />

            <div className="checkbox-group">
              <label>Indexing:</label>
              <input type="checkbox" id="scopus_conference" name="indexing_conference" value="Scopus Indexed" />
              <label htmlFor="scopus_conference">Scopus Indexed</label>

              <input type="checkbox" id="sci_conference" name="indexing_conference" value="SCI Indexed" />
              <label htmlFor="sci_conference">SCI Indexed</label>
            </div>

            <label htmlFor="upload_conference">Upload Conference</label>
            <input type="file" id="upload_conference" name="upload_conference" />
          </div>
        );
      case 'Book Chapter':
        return (
          <div className="input-group">
            <label htmlFor="book_title">Book Title</label>
            <input type="text" id="book_title" name="book_title" />

            <label htmlFor="book_name">Book Name</label>
            <input type="text" id="book_name" name="book_name" />

            <label htmlFor="book_publisher">Book Publisher</label>
            <input type="text" id="book_publisher" name="book_publisher" />

            <label htmlFor="doi_book">ISSN</label>
            <input type="text" id="doi_book" name="doi_book" />

            <div className="checkbox-group">
              <label>Indexing:</label>
              <input type="checkbox" id="scopus_book" name="indexing_book" value="Scopus Indexed" />
              <label htmlFor="scopus_book">Scopus Indexed</label>

              <input type="checkbox" id="sci_book" name="indexing_book" value="SCI Indexed" />
              <label htmlFor="sci_book">SCI Indexed</label>
            </div>

            <label htmlFor="upload_book">Upload Book Chapter</label>
            <input type="file" id="upload_book" name="upload_book" />
          </div>
        );
      case 'Patent':
        return (
          <div className="input-group">
            <label htmlFor="patent_title">Patent Title</label>
            <input type="text" id="patent_title" name="patent_title" />

            <label htmlFor="patent_date">Date Published</label>
            <input type="date" id="patent_date" name="patent_date" />

            <label htmlFor="patent_authority">Patent Authority</label>
            <input type="text" id="patent_authority" name="patent_authority" />

            <label htmlFor="patent_grant">Grant</label>
            <select id="patent_grant" name="patent_grant">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      case 'Copyright':
        return (
          <div className="input-group">
            <label htmlFor="copyright_title">Copyright Title</label>
            <input type="text" id="copyright_title" name="copyright_title" />

            <label htmlFor="copyright_date">Date Published</label>
            <input type="date" id="copyright_date" name="copyright_date" />

            <label htmlFor="copyright_grant">Grant</label>
            <select id="copyright_grant" name="copyright_grant">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Work</h2>
      <form>
        <div className="input-group">
          <label>Type of Submission</label>
          <div className="radio-group">
            <input
              type="radio"
              id="journal"
              name="submission_type"
              value="Journal"
              onChange={(e) => setSubmissionType(e.target.value)}
            />
            <label htmlFor="journal">Journal</label>

            <input
              type="radio"
              id="conference"
              name="submission_type"
              value="Conference"
              onChange={(e) => setSubmissionType(e.target.value)}
            />
            <label htmlFor="conference">Conference</label>

            <input
              type="radio"
              id="book_chapter"
              name="submission_type"
              value="Book Chapter"
              onChange={(e) => setSubmissionType(e.target.value)}
            />
            <label htmlFor="book_chapter">Book Chapter</label>

            <input
              type="radio"
              id="patent"
              name="submission_type"
              value="Patent"
              onChange={(e) => setSubmissionType(e.target.value)}
            />
            <label htmlFor="patent">Patent</label>

            <input
              type="radio"
              id="copyright"
              name="submission_type"
              value="Copyright"
              onChange={(e) => setSubmissionType(e.target.value)}
            />
            <label htmlFor="copyright">Copyright</label>
          </div>
        </div>

        {/* Render the conditional fields */}
        {renderFields()}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { loadWriteupContent } from '../../writeupLoader';
import '../style_markdown.css'
import '../style.css'

const WriteupDetail = ({ org }) => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    loadWriteupContent(org, slug).then(setContent);
  }, [org, slug]);

  return (
    <div className="writeup-detail">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default WriteupDetail;
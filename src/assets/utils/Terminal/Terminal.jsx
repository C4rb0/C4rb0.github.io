import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState(0);
  const terminalRef = useRef(null);

  const commands = [
    {
      command: "whoami",
      output: [
        "root@root:~$ whoami",
        "carbo",
        "",
      ],
      delay: 50
    },
    {
      command: "ls -l ~/skills",
      output: [
        "root@root:~$ ls -l ~/skills",
        "total 8",
        "-rw-r--r-- 1 user staff  456 Jan 10  React.js",
        "-rw-r--r-- 1 user staff  789 Jan 10  TypeScript",
        "-rw-r--r-- 1 user staff  321 Jan 10  Node.js",
        "-rw-r--r-- 1 user staff  654 Jan 10  UI/UX Design",
        "",
      ],
      delay: 30
    },
    {
      command: "cat about.txt",
      output: [
        "root@root:~$ cat about.txt",
        "",
        "Ciao, sono [Il Tuo Nome], uno sviluppatore creativo con",
        "5+ anni di esperienza nella creazione di interfacce",
        "moderne e performanti. Specializzato in React e design",
        "di interfacce utente con un occhio di riguardo per",
        "l'esperienza utente.",
        "",
        "Quando non scrivo codice, mi trovi a sperimentare con",
        "nuove tecnologie o a contribuire a progetti open source.",
        "",
      ],
      delay: 20
    },
    {
      command: "curl -X GET api/contact",
      output: [
        "root@root:~$ curl -X GET api/contact",
        "{",
        '  "email": "hello@example.com",',
        '  "github": "github.com/tuousername",',
        '  "linkedin": "linkedin.com/in/tuonome",',
        '  "twitter": "@tuoaccount",',
        "}",
        "",
      ],
      delay: 15
    },
    {
      command: "",
      output: [
        "root@root:~$ ",
      ],
      delay: 0,
      isPrompt: true
    }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const cmd = commands[currentCommand];
      let currentLine = 0;
      
      const typeNextLine = () => {
        if (currentLine < cmd.output.length) {
          const line = cmd.output[currentLine];
          let charIndex = 0;
          
          const typeInterval = setInterval(() => {
            if (charIndex < line.length) {
              setLines(prev => {
                const newLines = [...prev];
                if (!newLines[currentCommand]) {
                  newLines[currentCommand] = { text: '', output: [] };
                }
                if (!newLines[currentCommand].output[currentLine]) {
                  newLines[currentCommand].output[currentLine] = '';
                }
                newLines[currentCommand].output[currentLine] = line.substring(0, charIndex + 1);
                return newLines;
              });
              charIndex++;
            } else {
              clearInterval(typeInterval);
              currentLine++;
              setTimeout(typeNextLine, cmd.delay * 5);
            }
          }, cmd.delay);
        } else {
          setCurrentCommand(prev => prev + 1);
        }
      };

      const timeout = setTimeout(typeNextLine, currentCommand === 0 ? 1000 : 500);
      return () => clearTimeout(timeout);
    }
  }, [currentCommand]);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  return (
    <div className="cyber-terminal" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">carbo — root@root</div>
      </div>
      
      <div className="terminal-body">
        {lines.map((cmd, cmdIndex) => (
          <div key={cmdIndex}>
            {cmd.output.map((line, lineIndex) => (
              <div 
                key={lineIndex} 
                className={`terminal-line ${line.startsWith('guest@portfolio:~$') ? 'command' : ''}`}
              >
                {line}
                {commands[cmdIndex]?.isPrompt && lineIndex === cmd.output.length - 1 && (
                  <span className="cursor">▋</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Terminal;
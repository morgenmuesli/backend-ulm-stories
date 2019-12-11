% proposal template
% created by: Christian van Onzenoodt

\ProvidesClass{hci-proposal}[2017/07/11 v0.1 HCI Proposal]

\RequirePackage[T1]{fontenc}

\LoadClass[
  a4paper,  % A4
  twocolumn   % zweispaltig
]{article}

\RequirePackage[
  a4paper,
  left=.7in,
  right=.7in,
  top=.7in,
  bottom=.7in,
  footskip=.25in
]{geometry}

% Links im PDF
\RequirePackage[
  raiselinks=true,
  pdftex,
  colorlinks=false,
  bookmarks=true,
  bookmarksopenlevel=1,
  bookmarksopen=true,
  bookmarksnumbered=true,
  hyperindex=true,
  plainpages=false,
  pdfpagelabels=true,
  linkbordercolor={0 0.61 0.50},
  draft=false,
  citebordercolor={0 0.61 0.50}
]{hyperref}

\RequirePackage{iflang}
\RequirePackage{scrhack}
\RequirePackage[sc]{mathpazo}                 % Palatino
\RequirePackage{helvet}                       % Helvetica
\RequirePackage{booktabs}                     % Schönere Tables
\RequirePackage[final,draft=false]{microtype} % Micro-Typographische Verbesserungen
\RequirePackage{graphicx}                     % Grafiken
\RequirePackage{setspace}                     % Zeilenabstand
\RequirePackage[utf8]{inputenc}               % Codierung - Achtung! Wenn eine andere Codierung als UTF-8 verwendet wird, muss dies hier angegeben werden!
\RequirePackage[numbers]{natbib}              % Quellenformatierung
\RequirePackage{tikz}
\RequirePackage{pgfgantt}                     % Gant charts
\RequirePackage{pdflscape}                    % Gant charts need to be in landscape mode

\RequirePackage{sectsty}
\sectionfont{\centering\normalsize}
\subsectionfont{\centering\normalfont\mdseries}
\paragraphfont{\normalfont\mdseries}

\RequirePackage{titlesec}
\titlespacing*{\section}
{0pt}{0.8\baselineskip}{0.4\baselineskip}

% Variables
\def\@type{}
\newcommand\type[1]{\def\@type{#1}}

\def\@jahr{}
\newcommand\jahr[1]{\def\@jahr{#1}}

\def\@matnr{}
\newcommand\matnr[1]{\def\@matnr{#1}}

\def\@email{}
\newcommand\email[1]{\def\@email{#1}}

\renewcommand\maketitle{
\twocolumn[
  \begin{@twocolumnfalse}
    \begin{center}
      \normalfont\LARGE\bfseries\@title\\
      \vspace{.5cm}
      \mdseries\large\@author\\
      \normalsize
      \mdseries\IfLanguageName{ngerman}{Institut für Medieninformatik}{Institute of Media Informatics}\\
      \mdseries\IfLanguageName{ngerman}{Forschungsgruppe HCI}{HCI Group}\\
      \mdseries\IfLanguageName{ngerman}{Universität Ulm}{Ulm University}\\
      \mdseries\@email\\
      \vspace{.5cm}
    \end{center}
  \end{@twocolumnfalse}
]
}

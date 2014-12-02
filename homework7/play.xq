declare namespace html = "http://www.w3.org/1999/xhtml";
declare namespace s = "http://www.ibiblio.org/xml/examples/shakespeare/";

<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
    <title>{string(/s:PLAY/s:TITLE)}</title>
 </head>
 <body>
     <div>
        <h1>{string(/s:PLAY/s:TITLE)}</h1>
         {
         for $act in /s:PLAY/s:ACT
         return <div><h2>{string($act/s:TITLE)}</h2>
             {
             for $scene in $act/s:SCENE
                 for $speech in $scene/s:SPEECH
                     for $line in $speech/s:LINE
                        return <p>{string($line)}</p>
             }
         </div>
         }
     </div>
 </body>
 </html>
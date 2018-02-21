var elements = document.getElementsByTagName('*');

var find = ["User Defined \#1",
	    "User Defined \#2",
	    "User Defined \#3",
	    "User Defined \#4",
	    "User Defined \#5",
	    "User Defined \#6",
	    "User Defined Yes\/No \#1",
	    "User Defined Yes\/No \#2",
	    "User Defined Date \#1",
	    "User Defined Date \#2",
	    "User Defined Number \#1",
	    "User Defined Number \#2",
	   ];

var replace = ["NPV",
	       "P\&L Impact",
	       "Sq Ft Reduction",
	       "Capital Receipts",
	       "Name of DREAM",
	       "Name of BU Stakeholder",
	       "Include in PoP\?",
	       "JLL Project\?",
	       "WIP status update date",
	       "Date of last entry",
	       "Capital investment",
	       "WACC",
	      ];

for (var k = 0; k < find.length; k++)
{

    for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
	    
            if (node.nodeType === 3) {
		var text = node.nodeValue;
		var replacedText = text.replace(find[k], replace[k]);
		if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
		}
            }
	}
    }
}

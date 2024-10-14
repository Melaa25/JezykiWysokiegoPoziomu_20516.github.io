
//Zad 4
import dedent from "dedent";

function Przyklad() {
	const first = dedent`Nic dwa razy się nie zdarza
                                i nie zdarzy. Z tej przyczyny
    zrodziliśmy się bez wprawy
                            i pomrzemy bez rutyny.`;

	const second = dedent`
    Choćbyśmy uczniami byli
         najtępszymi w szkole świata,
             nie będziemy repetować
                żadnej zimy ani lata. 
  `;


	return first + "\n\n" + second + "\n\n";
}

console.log(Przyklad());
console.log("Moduł dzieli długiego stinga na kilka lini zgodnie z tym jak jest napisany w kodzie. Dzięki czemu łatwiej jest odczytywać długie stringi.");

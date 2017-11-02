var mocha = require("mocha");
var request = require("request");
var assert = require("assert");
var expect  = require("chai").expect;

var base_url = "http://192.168.1.3:8081/allforguest"

describe("Hello World Server", function() {
    describe("POST /", function() {
        it('Main page status', function() {
            request(base_url , function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });

        it('json correct', function() {
            request(base_url , function(error, response, body) {
                    expect(response.data).to.equal({
                        "type": "SimpleUserTypeId",
                        "uemail": "simple@user.com",
                        "category": [
                            {
                                "type": "CategoryTypeId",
                                "catid": 1,
                                "cattitle": "Ορεκτικά",
                                "catimpath": "http://192.168.1.3:8081/orektika",
                                "subcategory": [
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 6,
                                        "cattitle": "Με κρεατικά",
                                        "catimpath": "http://192.168.1.3:8081/orektikaMeKreatika",
                                        "recipe": [
                                            {
                                                "rid": 1,
                                                "rtitle": "Γεμιστά ρολάκια κιμά",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeKreatika/rolakiaKima",
                                                "mdesc": "1. 1 κιλό κιμά (ανάμικτο μοσχαρίσιο και χοιρινό) 2. 1 μεγάλο κρεμμύδι 3. 3 σκελίδες σκόρδο λειωμένο 4. 1 ματσάκι μαϊντανό 5. 2 αυγά 6. 2 φρυγανιές 7. 1 1/2 κουταλάκι αλάτι 8. Πιπέρι 9. 80 ml άσπρο κρασί 10. 2 αυγά για το πανάρισμα 11. τυρί ρεγκάτο ή γραβι",
                                                "steps": "1.	Τρίβουμε τα παξιμαδάκια χτυπάμε το κρεμμύδι με το μαϊντανό και τα αυγά και ανακατεύουμε καλά όλα τα υλικά μαζί. 2.	Κόβουμε το τυρί σε μπαστουνάκια. 3. Κόβουμε το ζαμπόν σε λωρίδες. 4.	Χτυπάμε σε μπολ τα αυγά με νερό για το πανάρισμα. 5.	Χτυπάμε τα "
                                            },
                                            {
                                                "rid": 2,
                                                "rtitle": "Κοτομπουκιές πανέ στο φούρνο",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeKreatika/Kotompoukies",
                                                "mdesc": "<ul> <li>700 γρ. κοτόπουλο στήθος φιλέτο</li> <li>70 γρ. γαλέτα</li> <li>70 γρ. παρμεζάνα</li> <li>1/2 φλιτζάνι ελαιόλαδο</li> <li>το χυμό ενός λεμονιού</li> <li>1 κ.γ. μουστάρδα</li> <li>αλάτι</li> <li>πιπέρι φρεσκοτριμμένο</li> </ul>",
                                                "steps": "<ol> <li>Κόβουμε το φιλέτο σε μπουκιές.</li> <li>Σε ένα μπολ βάζουμε το λάδι, το λεμόνι, την μουστάρδα, το αλάτι και τέλος το πιπέρι και χτυπάμε να ομογενοποιηθεί το μείγμα.</li> <li>Σε ένα άλλο μπολ βάζουμε την γαλέτα με την παρμεζάνα.</li> <li>Βουτάμε τις μπουκίτσες στο λαδολέμονο και μετά στο μείγμα γαλέτας-παρμεζάνας.</li> <li>Βάζουμε στο ταψί μας λαδόκολλα και τοποθετούμε τις κοτομπουκιές την μία δίπλα στην άλλη χωρίς να ακουμπάνε.</li> <li>Βάζω σε προθερμασμένο φούρνο στους 180ο θερμό αέρα στην 2η θέση από κάτω και ψήνω για 20 λεπτά.</li> </ol>"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 7,
                                        "cattitle": "Με λαχανικά",
                                        "catimpath": "http://192.168.1.3:8081/orektikaMeLaxanika",
                                        "recipe": [
                                            {
                                                "rid": 6,
                                                "rtitle": "Muffins με κολοκυθάκια",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeLaxanika/muffinsMeKolokith",
                                                "mdesc": "<ul> <li>2 - 3 κολοκυθάκια τριμμένα</li> <li>150 γρ. γιαούρτι στραγγιστό</li> <li>2 αυγά χτυπημένα</li> <li>1/2 ποτήρι καλαμποκέλαιο</li> <li>1 ποτήρι αλεύρι που φουσκώνει μόνο του</li> <li>150 γρ. φέτα τριμμένη</li> <li>αλάτι</li> <li>1-2",
                                                "steps": "<ol> <li>Αναμιγνύουμε όλα τα υλικά μαζί και κάνουμε ένα πηχτό χυλό.</li> <li>Λαδώνουμε καλά τις υποδοχές για τα muffins (ταψάκια για muffins) ή τα χαρτάκια για muffins και πασπαλίζουμε με φρυγανιά.</li> <li>Ρίχνουμε στις υποδοχές 2 - 3 κουταλιές απo το μείγμα και τα ψήνουμε στους 180 βαθμούς μέχρι να ροδίσει όλη τους η επιφάνεια (περίπου 50 λεπτά ανάλογα το φούρνο).</li> </ol>"
                                            },
                                            {
                                                "rid": 7,
                                                "rtitle": "Γεμιστό Αβοκάντο",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeLaxanika/gemistoAvokanto",
                                                "mdesc": "<ul> <li>1 Αβοκάντο</li> <li>1 Ντομάτα</li> <li>1 Αγγουράκι</li> <li>1 Κούπα γιαουρτι</li> <li>1 Κουτάλι σούπας ψιλοκομμένο φρέσκο κρεμμύδι</li> <li>Φρέσκο μαϊντανό ψιλοκομμένο για γαρνίρισμα</li> <li>Μια πρεζα αλάτι</li> </ul>",
                                                "steps": "<ol> <li> Κόβουμε το Αβοκάντο στη μέση και με ενα κουτάλι αφαιρούμε προσεκτικά τη σάρκα.</li> <li>Σε μπώλ βαζουμε τη ντομάτα και το αγγουράκι, αφού τα έχουμε ψιλοκόψει.</li> <li>Προσθέτουμε την σάρκα του αβοκάντο, το φρέσκο κρεμμυδάκι και το γιαουρτι.</li> <li>Αλατίζουμε και ανακατεύουμε.</li> <li>Με ενα κουτάλι γεμίζουμε τα μισά του αβοκάντο, πασπαλίζουμε με ψιλοκομμένο μαϊντανό και σερβίρουμε.</li> </ol>"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 8,
                                        "cattitle": "Με θαλασσινά",
                                        "catimpath": "http://192.168.1.3:8081/orektikaMeThalassina",
                                        "recipe": [
                                            {
                                                "rid": 11,
                                                "rtitle": "Γαρίδες λεμονάτες με πιπεριές",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeThalassina/garidesMePiperies",
                                                "mdesc": "<ul> <li>500 γρ γαρίδες μεσαίες</li> <li>100 γρ νερό ζεστό</li> <li>1 συμπυκνωμένος ζωμός λαχανικών</li> <li>100 γρ ελαιόλαδο</li> <li>3 σκελίδες σκόρδο σε φέτες</li> <li>30 γρ χυμός λεμονιού</li> <li>2 κουτ σούπας μαϊντανός ψιλοκομμένος</li",
                                                "steps": "<ol> <li> Ξεπλένουμε καλά τις γαρίδες και τις αφήνουμε να στραγγίξουν σε τρυπητό σκεύος.</li> <li>Σε ένα μπλέντερ αναμιγνύουμε το νερό, τον ζωμό και το ελαιόλαδο μέχρι να διαλυθεί ο ζωμός..</li> <li>Ρίχνουμε το μίγμα σε ένα βαθύ τηγάνι και προσθέτουμε το σκόρδο, το χυμό λεμονιού, το μαϊντανό και τις πιπεριές.</li> <li>Βράζουμε για 2 λεπτά περίπου και κατόπιν προσθέτουμε τις γαρίδες, αλατίζοντάς τες ελαφρά.</li> <li>Τέλος, προσθέτουμε τη μουστάρδα και αφήνουμε να βράσει για ακόμα 3 λεπτά περίπου, ανακατεύοντας με απαλές κινήσεις.</li> <li>Αποσύρουμε από την φωτιά και σερβίρουμε αμέσως.</l"
                                            },
                                            {
                                                "rid": 12,
                                                "rtitle": "Καναπεδάκια με μους σολομού",
                                                "rimpath": "http://192.168.1.3:8081/orektika/MeThalassina/kanapedakiaSolomou",
                                                "mdesc": "<ul> <li>100 γρ. καπνιστό σολομό</li> <li>100 γρ. τυρί κρέμα</li> <li>1 κ.γ. μαγιονέζα</li> <li>άνηθο όσο θέλετε</li> <li>λιγο λεμόνι</li> <li>φρυγανισμένο ψωμί του τοστ σε τέταρτα</li> </ul>",
                                                "steps": "<ol> <li> Πολτοποιείτε όλα τα υλικά - πλην του ψωμιού - σε μούλτι.</li> <li>Αλείφετε το ψωμί και αν θέλετε γαρνίρετε με άνηθο.</li> </ol>"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 9,
                                        "cattitle": "Πίτες",
                                        "catimpath": "http://192.168.1.3:8081/orektikaPites",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 10,
                                        "cattitle": "Διάφορα",
                                        "catimpath": "http://192.168.1.3:8081/orektikaDiafora",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    }
                                ],
                            },
                            {
                                "type": "CategoryTypeId",
                                "catid": 2,
                                "cattitle": "Σαλάτες",
                                "catimpath": "http://192.168.1.3:8081/salates",
                                "subcategory": [
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 11,
                                        "cattitle": "Με κρεατικά",
                                        "catimpath": "http://192.168.1.3:8081/salatesMeKreatika",
                                        "recipe": [
                                            {
                                                "rid": 26,
                                                "rtitle": "Κοτοσαλάτα με χρωματιστά ζυμαρικά",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeKreatika/kotosalataMeXrwmZumarika",
                                                "mdesc": "<ul> <li>700 γρ. κοτόπουλο</li> <li>1 κρεμμύδι</li> <li>2 καρότα</li> <li>250 γρ. πένες τρίχρωμες</li> <li>300 γρ. γιαούρτι στραγγιστό</li> <li>300 γρ. μαγιονέζα</li> <li>3-4 αγγουράκια τουρσί</li> <li>5 φέτες γαλοπούλα ή ζαμπόν</li> <li",
                                                "steps": "<ol> <li>Βάζουμε το κοτόπουλο σε κατσαρόλα μαζί με το κρεμμύδι, τα καρότα, το αλατοπίπερο και νερό τόσο όσο να το σκεπάζει, και βράζουμε ώσπου να ξεκολλάει από τα κόκαλα και να είναι έτοιμο.</li> <li>Καθαρίζουμε το κοτόπουλο από τις πέτσες και τα κόκαλα και το ψιλοκόβουμε μαζί με τα καρότα.</li> <li>Σουρώνουμε το ζουμί από το κοτόπουλο και βράζουμε τις πένες. Μόλις βράσουν τις ανακατεύουμε με το λάδι.</li> <li>Σε ένα μπολ αναμιγνύουμε το κοτόπουλο, τα καρότα, τις πένες, τα αγγουράκια ψιλοκομμένα, τις φέτες γαλοπούλας ψιλοκομμένες και το μαιντανό. Στο τέλος ρίχνουμε τη μαγιονέζα και το γιαο"
                                            },
                                            {
                                                "rid": 27,
                                                "rtitle": "Μεξικάνικη σαλάτα με μπέικον και καλαμπό",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeKreatika/mexikanikiSalata",
                                                "mdesc": "<ul> <li>1 κονσέρβα μαύρα ή κόκκινα φασόλια</li> <li>1 κονσέρβα καλαμπόκι</li> <li>1/2 μαρούλι ψιλοκομμένο</li> <li>1 πράσινη, 1 κόκκινη, 1 κίτρινη πιπεριάο</li> <li>2 - 3 κρεμμυδάκια φρέσκα</li> <li>150 γρ. μπέικον</li> <li>7-8 ελιές περίπο",
                                                "steps": "<ol> <li> Ψιλοκόβουμε το μαρούλι και τα φρέσκα κρεμμυδάκια. Τις πιπεριές τις κόβουμε σε μακρόστενα κομματάκια.</li> <li>Ξεπλένουμε καλά σε σουρωτήρι τα φασόλια και το καλαμπόκι από τα υγρά της κονσέρβας.</li> <li>Τσιγαρίζουμε το μπέικον χωρίς λάδι σε αντικολλητικό τηγάνι και το βγάζουμε σε απορροφητικό χαρτί να βγάλει ό,τι τυχόν λάδι έχει (να είναι δηλαδή εντελώς στεγνό).</li> <li>Ανακατεύουμε όλα τα υλικά μαζί σε βαθιά διάφανη σαλατιέρα.</li> <li>Ανακατεύουμε τη μαγιονέζα με την κέτσαπ σε ένα μπωλάκι χωριστά και προσθέτουμε το ταμπάσκο δοκιμάζοντας ενδιάμεσα για να βγει όσο καυτερό το θέ"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 12,
                                        "cattitle": "Με λαχανικά",
                                        "catimpath": "http://192.168.1.3:8081/salatesMeLaxanika",
                                        "recipe": [
                                            {
                                                "rid": 31,
                                                "rtitle": "Σαλάτα γλυστρίδας",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeLaxanika/salataGlustridas",
                                                "mdesc": "<ul> <li>4 μέτριες ντομάτες κομμένες σε μικρά κομμάτια</li> <li>1/2 φλυτζάνι φύλλα γλυστρίδας</li> <li>1 μέτριο κρεμμύδι κομμένο σαν για χωριάτικη σαλάτα</li> <li>παρθένο ελαιόλαδο</li> <li>αλάτι</li> </ul>",
                                                "steps": "<ol> <li> Πλένουμε τα φύλλα της γλυστρίδας και, μέσα σε μπολ, την αναμειγνύουμε με την ντομάτα και το κρεμμύδι, ντρεσάρουμε με το ελαιόλαδο και προσθέτουμε αλάτι κατά βούληση.</li> </ol>"
                                            },
                                            {
                                                "rid": 32,
                                                "rtitle": "Γλυκόξινη σαλάτα",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeLaxanika/glukoxiniSalata",
                                                "mdesc": "<ul> <li>150γρ. σπανάκι</li> <li>150γρ. ρόκα</li> <li>1κ.σ. ελαιόλαδο</li> <li>1κ.σ. ξύδι βαλσάμικο</li> <li>1κ.γλ. μουστάρδα</li> <li>μικρά κομμάτια παστέλι<li> <li>φλύδες παρμεζάνας</li> </ul>",
                                                "steps": "<ol> <li>Κόβουμε σε χοντρά κομμάτια τη ρόκα και το σπανάκι</li> <li>Σπάμε το παστέλι σε κομματάκια</li> <li>Ανακατέβουμε το λάδι με το ξύδι και τη μουστάρδα σε ενα ποτηράκι</li> <li>Τέλος τα βάζουμε όλα μαζί σε ένα μπόλ (ρόκα, σπανάκι, παρμεζάνα και το μίγμα μουστάρδας) και σερβίρουμε.</li> </ol>"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 13,
                                        "cattitle": "Με θαλασσινά",
                                        "catimpath": "http://192.168.1.3:8081/salatesMeThalassina",
                                        "recipe": [
                                            {
                                                "rid": 37,
                                                "rtitle": "Μακαρονοτονοσαλάτα",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeThalassina/makaronotonosalata",
                                                "mdesc": "<ul> <li>500γρ ζυμαρικό βίδες</li> <li>1 τόνος σε νερό</li> <li>2 φλ. τσ. καλαμπόκι</li> <li>2 πιπεριές φλωρίνης</li> <li>1 αγγούρι</li> <li>1 φλ.τσ. μαγιονέζα<li> <li>άνιθο</li> </ul>",
                                                "steps": "<ol> <li>Βράζουμε τα ζυμαρικά σε μπόλικο αλατισμένο νερό ,μόλις τα σουρώσουμε, τα αφήνουμε λίγο στην άκρη να κρυώσουν ελαφρά.</li> <li>Βράζουμε το καλαμπόκι αν έιναι κατεψυγμένο, διαφορετικά αν χρησιμοποιήσουμε κονσέρβα το βάζουμε σε ένα μεγάλο μπολ με τις πιπεριές και το αγγούρι κομμένα σε μικρά κυβάκια.</li> <li>Προσθέτουμε τα μακαρόνια, τον άνηθο, το αλατοπίπερο και τη μαγιονέζα.Ανακατεύουμε καλά και βάζουμε το μπολ σκεπασμένο στο ψυγείο για τουλάχιστον 1 ώρα.</li> </ol>"
                                            },
                                            {
                                                "rid": 38,
                                                "rtitle": "Πολύχρωμη σαλάτα με τόνο και μήλο",
                                                "rimpath": "http://192.168.1.3:8081/salates/MeThalassina/poluxrwmiMeTono",
                                                "mdesc": "<ul> <li>1 μαρούλι μέτριο καλά πλυμένο και χοντροκομμένο</li> <li>1 μεγάλο και σκληρό μήλο, γλυκό ή ξυνόμηλο</li> <li>1 έγχρωμη πιπεριά (κόκκινη, πορτοκαλί ή κίτρινη) κομμένη σε κύβους μέτριου μεγέθους</li> <li>10 περίπου τοματάκια κομμένα στη μέσ",
                                                "steps": "<ol> <li>Σε ένα πολύ βαθύ σκεύος ρίχνουμε 4-5 κ.σ. σως βινεγκρέτ.</li> <li>Πλένουμε και κόβουμε όλα τα υλικά και τα τοποθετούμε και αυτά στο σκεύος.</li> <li>Από πάνω προσθέτουμε ακόμα λίγη σως.</li> <li>Ανακατεύουμε απαλά αλλά πολύ καλά για να πάει παντού η βινεγκρέτ.</li> <li>Τελευταία αφήνουμε τα κρουτόν και τις φλούδες του τυριού, τα οποία τα τοποθετούμε πάνω πάνω σαν γαρνιτούρα και ραντίζουμε με λίγη σως ακόμα. Όχι πολύ σως για να μην παπαριάσουν τα κρουτόν.</li> </ol>"
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 14,
                                        "cattitle": "Με ζυμαρικά",
                                        "catimpath": "http://192.168.1.3:8081/salatesMeZumarika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 15,
                                        "cattitle": "Διάφορες",
                                        "catimpath": "http://192.168.1.3:8081/salatesDiafores",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    }
                                ],
                            },
                            {
                                "type": "CategoryTypeId",
                                "catid": 3,
                                "cattitle": "Κυρίως Πιάτα",
                                "catimpath": "http://192.168.1.3:8081/kuriws",
                                "subcategory": [
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 16,
                                        "cattitle": "Με κρεατικά",
                                        "catimpath": "http://192.168.1.3:8081/kuriwsMeKreatika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 17,
                                        "cattitle": "Με λαχανικά",
                                        "catimpath": "http://192.168.1.3:8081/kuriwsMeLaxanika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 18,
                                        "cattitle": "Με θαλασσινά",
                                        "catimpath": "http://192.168.1.3:8081/kuriwsMeThalassina",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 19,
                                        "cattitle": "Με ζυμαρικά",
                                        "catimpath": "http://192.168.1.3:8081/kuriwsMeZumarika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 20,
                                        "cattitle": "Όσπρια",
                                        "catimpath": "http://192.168.1.3:8081/kuriwsMeOspria",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    }
                                ],
                            },
                            {
                                "type": "CategoryTypeId",
                                "catid": 4,
                                "cattitle": "Σούπες",
                                "catimpath": "http://192.168.1.3:8081/soupes",
                                "subcategory": [
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 21,
                                        "cattitle": "Με κρεατικά",
                                        "catimpath": "http://192.168.1.3:8081/soupesMeKreatika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 22,
                                        "cattitle": "Με λαχανικά",
                                        "catimpath": "http://192.168.1.3:8081/soupesMeLaxanika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 23,
                                        "cattitle": "Με θαλασσινά",
                                        "catimpath": "http://192.168.1.3:8081/soupesMeThalassina",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 24,
                                        "cattitle": "Με ζυμαρικά",
                                        "catimpath": "http://192.168.1.3:8081/soupesMeZumarika",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 25,
                                        "cattitle": "Όσπρια",
                                        "catimpath": "http://192.168.1.3:8081/soupesMeOspria",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    }
                                ],
                            },
                            {
                                "type": "CategoryTypeId",
                                "catid": 5,
                                "cattitle": "Γλυκά",
                                "catimpath": "http://192.168.1.3:8081/gluka",
                                "subcategory": [
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 26,
                                        "cattitle": "Ζύμης",
                                        "catimpath": "",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 27,
                                        "cattitle": "Σιροπιαστά",
                                        "catimpath": "",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 28,
                                        "cattitle": "Παγωτά",
                                        "catimpath": "",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 29,
                                        "cattitle": "Ψυγείου",
                                        "catimpath": "",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    },
                                    {
                                        "type": "SubcategoryTypeId",
                                        "catid": 30,
                                        "cattitle": "Με φρούτα",
                                        "catimpath": "",
                                        "recipe": [
                                            {
                                                "rid": 0,
                                                "rtitle": "tpt",
                                                "rimpath": "",
                                                "mdesc": "",
                                                "steps": ""
                                            }
                                        ],
                                    }
                                ],
                            }
                        ],
                    });
                //});
            });
        });
    });
});
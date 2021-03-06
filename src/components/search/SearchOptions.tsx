import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

//@ts-ignore
function SearchOptions({ categoryContext, setCategoryContext, page }) {
    let [searchParams, setSearchParams] = useSearchParams();
    let [type, setType] = useState("title");
    let [formatSelect, setFormatSelect] = useState("any");
    let [languageSelect, setLanguageSelect] = useState("any");

    const cat = searchParams.get("category");
    const searchType = searchParams.get("type");
    const format = searchParams.get("format");
    const language = searchParams.get("language");
    const pageParamString = searchParams.get("page");

    // Change based on URL
    useEffect(() => {
        if (
            cat != null &&
            cat !== categoryContext &&
            ["fiction", "sci-tech"].includes(cat)
        ) {
            setCategoryContext(cat);
        }
        if (
            searchType != null &&
            searchType !== type &&
            ["title", "author"].includes(searchType)
        ) {
            setType(searchType);
        }
        if (
            format != null &&
            format !== formatSelect &&
            ["any", "epub", "pdf", "mobi"].includes(format)
        ) {
            setFormatSelect(format);
        }
        if (
            language != null &&
            language !== languageSelect &&
            ["any", "english", "portuguese"].includes(language)
        ) {
            setLanguageSelect(language);
        }
    }, [searchParams]);

    return (
        <div>
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-lg-2 col-5">
                    <div id="searchcat">
                        <label className="" htmlFor="searchcat">
                            Categoria:
                        </label>
                        <div className="form-check form-check">
                            <input
                                type="radio"
                                value="any"
                                className="form-check-input"
                                name="category"
                                id="searchcatany"
                                checked={categoryContext === "any"}
                                onChange={() => {
                                    setCategoryContext("any");
                                }}
                            />
                            <label htmlFor="searchcatany" className="mb-1">
                                <abbr title="Mais lento">
                                    Todas <br />
                                </abbr>
                            </label>
                        </div>
                        <div className="form-check form-check">
                            <input
                                type="radio"
                                value="sci-tech"
                                className="form-check-input"
                                name="category"
                                id="searchcatnonfiction"
                                checked={categoryContext === "sci-tech"}
                                onChange={() => {
                                    setCategoryContext("sci-tech");
                                }}
                            />
                            <label
                                htmlFor="searchcatnonfiction"
                                className="mb-1"
                            >
                                N??o-fic????o
                            </label>
                        </div>
                        <div className="form-check form-check">
                            <input
                                type="radio"
                                value="fiction"
                                className="form-check-input"
                                name="category"
                                id="searchcatfiction"
                                checked={categoryContext === "fiction"}
                                onChange={() => {
                                    setCategoryContext("fiction");
                                }}
                            />
                            <label htmlFor="searchcatfiction " className="mb-1">
                                Fic????o
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-5">
                    <div id="searchby" className="">
                        <label htmlFor="searchby">Pesquisar por:</label>
                        <div className="form-check form-check">
                            <input
                                type="radio"
                                value="title"
                                className="form-check-input"
                                name="type"
                                id="searchbytitle"
                                checked={type === "title"}
                                onChange={() => {
                                    setType("title");
                                }}
                            />
                            <label htmlFor="searchbytitle" className="mb-1">
                                T??tulo
                            </label>
                        </div>
                        <div className="form-check form-check">
                            <input
                                type="radio"
                                value="author"
                                className="form-check-input"
                                name="type"
                                id="searchbyauthorinput"
                                checked={type === "author"}
                                onChange={() => {
                                    setType("author");
                                }}
                            />
                            <label
                                id="searchbyauthorlabel"
                                htmlFor="searchbyauthorinput"
                            >
                                Autor
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 d-flex flex-row justify-content-center">
                <div className="col-lg-2 col-5">
                    <label htmlFor="format">Formato:</label>
                    <select
                        value={formatSelect}
                        onChange={(e) => setFormatSelect(e.target.value)}
                        className="form-control form-select"
                        name="format"
                        id="format"
                    >
                        <option value="any">TODOS</option>
                        <option value="epub">EPUB</option>
                        <option value="pdf">PDF</option>
                        <option value="mobi">MOBI</option>
                    </select>
                </div>

                <div className="col-lg-2 col-5">
                    <label className="" htmlFor="searchlang">
                        Linguagem:
                    </label>

                    <select
                        value={languageSelect}
                        onChange={(e) => setLanguageSelect(e.target.value)}
                        className="form-control form-select"
                        name="language"
                        id="searchlang"
                    >
                        <option value="any">Qualquer</option>
                        <option value="portuguese">Portugu??s</option>
                        <option value="english">Ingl??s</option>
                    </select>
                </div>
                <div>
                    <input
                        className="visually-hidden"
                        type="number"
                        value={page}
                        name="page"
                        readOnly={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchOptions;

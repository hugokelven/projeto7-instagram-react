const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

export default function Icones() {
    return(
        <div class="icones">
            {icones.map(icone => <ion-icon name={icone}/>)}
        </div>
    )
}